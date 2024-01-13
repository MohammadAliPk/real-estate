const e2p = (s: number | string): string =>
  s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d, 10)]);

const p2e = (s: number | string): string =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());

const sp = (number: number): string => {
  const separatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (!separatedNumber) return "";
  const joinedNumber = separatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
