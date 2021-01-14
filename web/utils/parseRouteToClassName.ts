/**
 *
 * parseRouteToClassName.tsx
 * @author Peter Laxalt
 * @description Parses routes to class names
 *
 */

export const parseRouteToClassName = (pathname: string) => {
  let parsedPath = pathname.replace(/\//g, '');

  return parsedPath === "" ? "home" : parsedPath;
};
