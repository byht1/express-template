import { TCtrlWrapperFunc } from 'type'

export const ctrlWrapper = <D, B, P, Q>(ctrl: RouterFn<D, B, P, Q>) => {
  const func: TCtrlWrapperFunc<D, B, P, Q> = async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      console.info('❌ error:', error)
      next(error)
    }
  }

  return func
}
