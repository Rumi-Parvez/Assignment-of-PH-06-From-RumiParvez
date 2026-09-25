"use client";

import React, {
  ReactNode,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useSyncExternalStore,
} from "react";

import { IWorkoutData } from "../types/IData";

const TODAYS_PLAN_KEY = "todaysPlan";
const SAVED_DATA_KEY = "savedData";
const PLAN_COUNT_KEY = "planCount";
const SAVE_COUNT_KEY = "saveCount";

const EMPTY_WORKOUTS: IWorkoutData[] = [];

type StorageCache = {
  raw: string | null;
  value: unknown;
};

const storageCache = new Map<string, StorageCache>();

type Listener = () => void;

const listeners = new Map<string, Set<Listener>>();

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    const cached = storageCache.get(key);

    if (cached && cached.raw === raw) {
      return cached.value as T;
    }

    if (!raw) {
      storageCache.set(key, {
        raw: null,
        value: fallback,
      });

      return fallback;
    }

    const parsed = JSON.parse(raw);

    storageCache.set(key, {
      raw,
      value: parsed,
    });

    return parsed as T;
  } catch {
    storageCache.set(key, {
      raw: null,
      value: fallback,
    });

    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const raw = JSON.stringify(value);

    window.localStorage.setItem(key, raw);

    storageCache.set(key, {
      raw,
      value,
    });

    const keyListeners = listeners.get(key);

    keyListeners?.forEach((listener) => {
      listener();
    });
  } catch {}
}

function subscribeToStorage(
  key: string,
  callback: Listener
) {
  if (typeof window === "undefined") {
    return () => {};
  }

  let keyListeners = listeners.get(key);

  if (!keyListeners) {
    keyListeners = new Set();
    listeners.set(key, keyListeners);
  }

  keyListeners.add(callback);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === key) {
      storageCache.delete(key);
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    keyListeners?.delete(callback);

    window.removeEventListener(
      "storage",
      handleStorage
    );
  };
}

const getTodaysPlanSnapshot = () =>
  readStorage<IWorkoutData[]>(
    TODAYS_PLAN_KEY,
    EMPTY_WORKOUTS
  );

const getSavedDataSnapshot = () =>
  readStorage<IWorkoutData[]>(
    SAVED_DATA_KEY,
    EMPTY_WORKOUTS
  );

const getPlanCountSnapshot = () =>
  readStorage<number>(
    PLAN_COUNT_KEY,
    0
  );

const getSaveCountSnapshot = () =>
  readStorage<number>(
    SAVE_COUNT_KEY,
    0
);

const getTodaysPlanServerSnapshot = () =>
  EMPTY_WORKOUTS;

const getSavedDataServerSnapshot = () =>
  EMPTY_WORKOUTS;

const getPlanCountServerSnapshot = () =>
  0;

const getSaveCountServerSnapshot = () =>
  0;

const subscribeTodaysPlan = (callback: Listener) =>
  subscribeToStorage(
    TODAYS_PLAN_KEY,
    callback
  );

const subscribeSavedData = (callback: Listener) =>
  subscribeToStorage(
    SAVED_DATA_KEY,
    callback
  );

const subscribePlanCount = (callback: Listener) =>
  subscribeToStorage(
    PLAN_COUNT_KEY,
    callback
  );

const subscribeSaveCount = (callback: Listener) =>
  subscribeToStorage(
    SAVE_COUNT_KEY,
    callback
  );

interface FitLogContextType {
  todaysPlan: IWorkoutData[];
  setTodaysPlan: Dispatch<
    SetStateAction<IWorkoutData[]>
  >;

  savedData: IWorkoutData[];
  setSavedData: Dispatch<
    SetStateAction<IWorkoutData[]>
  >;

  planCount: number;
  setPlanCount: Dispatch<
    SetStateAction<number>
  >;

  saveCount: number;
  setSaveCount: Dispatch<
    SetStateAction<number>
  >;

  isActive: string;
  setIsActive: Dispatch<
    SetStateAction<string>
  >;

  sortBy: string;
  setSortBy: Dispatch<
    SetStateAction<string>
  >;
}

export const IsAddedList =
  createContext<FitLogContextType | undefined>(
    undefined
  );

const AddListBtnContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const todaysPlan = useSyncExternalStore(
    subscribeTodaysPlan,
    getTodaysPlanSnapshot,
    getTodaysPlanServerSnapshot
  );

  const savedData = useSyncExternalStore(
    subscribeSavedData,
    getSavedDataSnapshot,
    getSavedDataServerSnapshot
  );

  const planCount = useSyncExternalStore(
    subscribePlanCount,
    getPlanCountSnapshot,
    getPlanCountServerSnapshot
  );

  const saveCount = useSyncExternalStore(
    subscribeSaveCount,
    getSaveCountSnapshot,
    getSaveCountServerSnapshot
  );

  const [isActive, setIsActive] =
    useState<string>("TPlane");

  const [sortBy, setSortBy] =
    useState<string>("duration");

  const setTodaysPlan: Dispatch<
    SetStateAction<IWorkoutData[]>
  > = (action) => {
    const current = readStorage<IWorkoutData[]>(
      TODAYS_PLAN_KEY,
      EMPTY_WORKOUTS
    );

    const next =
      typeof action === "function"
        ? action(current)
        : action;

    writeStorage(
      TODAYS_PLAN_KEY,
      next
    );
  };

  const setSavedData: Dispatch<
    SetStateAction<IWorkoutData[]>
  > = (action) => {
    const current = readStorage<IWorkoutData[]>(
      SAVED_DATA_KEY,
      EMPTY_WORKOUTS
    );

    const next =
      typeof action === "function"
        ? action(current)
        : action;

    writeStorage(
      SAVED_DATA_KEY,
      next
    );
  };

  const setPlanCount: Dispatch<
    SetStateAction<number>
  > = (action) => {
    const current = readStorage<number>(
      PLAN_COUNT_KEY,
      0
    );

    const next =
      typeof action === "function"
        ? action(current)
        : action;

    writeStorage(
      PLAN_COUNT_KEY,
      next
    );
  };

  const setSaveCount: Dispatch<
    SetStateAction<number>
  > = (action) => {
    const current = readStorage<number>(
      SAVE_COUNT_KEY,
      0
    );

    const next =
      typeof action === "function"
        ? action(current)
        : action;

    writeStorage(
      SAVE_COUNT_KEY,
      next
    );
  };

  return (
    <IsAddedList.Provider
      value={{
        isActive,
        setIsActive,
        todaysPlan,
        setTodaysPlan,
        savedData,
        setSavedData,
        planCount,
        setPlanCount,
        saveCount,
        setSaveCount,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </IsAddedList.Provider>
  );
};

export default AddListBtnContext;