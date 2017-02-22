// Created by snov on 22.02.2017.
//

export const generateId = (id = 0) => {
  return {
    current: () => id,
    next: () => id++
  }
};