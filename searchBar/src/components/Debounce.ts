const debounce = <F extends (...args: any[]) => any>(
    func: F,
    time: number,
) => {
    let timeout: NodeJS.Timeout;
  
    return (...args: Parameters<F>): Promise<ReturnType<F>> =>
      new Promise((resolve) => {
        if (timeout) {
          clearTimeout(timeout);
        }
  
        timeout = setTimeout(() => resolve(func(...args)), time);
    });
};
  
export default debounce;