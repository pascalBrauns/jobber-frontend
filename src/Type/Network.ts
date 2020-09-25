export type Node<T> = {
  id: string;
  data: T;
}

export type Edge<T> = {
  from: Node<T> | null;
  to: Node<T>;
}

export type Map<T> = {
  rows: Node<T>[][];
  dimensions: {
    x: number;
    y: number;
  }
}

export type Graph<T> = {
  nodes: Node<T>[];
  edges: Edge<T>[];
  origins: Node<T>[];
  map: Map<T>;
}
