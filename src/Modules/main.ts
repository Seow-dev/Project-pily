export {}

const CUR_PAGE = 'main/CUR_PAGE' as const;

export const setCur = (cur: number) => ({
  type: CUR_PAGE,
  payload: cur
})