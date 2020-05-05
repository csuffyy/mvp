const pathsMap = {
    home: () => '/',
    app: () => '/app',
    addCollection: () => '/add-collection',
    viewCollection: (collectionId: number) => `/collections/${collectionId}`,
    editCollection: (collectionId: number) => `/collections/${collectionId}/edit`,
};

type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
    route: TRoute,
    ...params: Parameters<PathsMap[TRoute]>
) => {
    const pathCb: (...args: any[]) => string = pathsMap[route];

    return pathCb(...params);
};