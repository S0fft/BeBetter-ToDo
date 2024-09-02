type AsyncFunction<TFunctionReturnType> = () => Promise<TFunctionReturnType>;

type Result<TFunctionReturnType> = [null, TFunctionReturnType] | [Error, null];

/**
 * Executes an asynchronous function and returns a tuple with either the result or an error.
 *
 * @template TFunctionReturnType - The return type of the asynchronous function.
 * @param {AsyncFunction<TFunctionReturnType>} cb - The asynchronous function to execute.
 * @returns {Promise<Result<TFunctionReturnType>>} A promise that resolves to a tuple where the first element is an error (if any) and the second element is the result (if successful).
 */
const runAsync = async <TFunctionReturnType>(
  cb: AsyncFunction<TFunctionReturnType>,
): Promise<Result<TFunctionReturnType>> => {
  try {
    const res = await cb();
    return [null, res];
  } catch (e) {
    const error = e instanceof Error ? e : new Error(String(e));
    return [error, null];
  }
};

export default runAsync;
