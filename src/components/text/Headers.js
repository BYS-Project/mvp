"use client";

export function H1({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[6.5rem] xl:text-[13.5rem] md:text-[8.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H2({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[5rem] xl:text-[10.5rem] md:text-[6.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H3({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[4rem] xl:text-[8rem] md:text-[5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H4({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[3.5rem] xl:text-[6rem] md:text-[4rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H5({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[3rem] xl:text-[5.5rem] md:text-[3.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H6({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[2.75rem] xl:text-[4.5rem] md:text-[3rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H7({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[2.5rem] xl:text-[4.25rem] md:text-[2.75rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H8({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[2.25rem] xl:text-[4rem] md:text-[2.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
export function H9({ style, className, children }) {
  return (
    <h1
      style={style}
      className={`${
        className ? className : ""
      } text-[2rem] xl:text-[3.75rem] md:text-[2.25rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
