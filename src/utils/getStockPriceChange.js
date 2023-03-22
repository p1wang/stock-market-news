export default function getStockPriceChange(last, prevClose) {
  const change = last - prevClose;
  const changePercent = (change / prevClose) * 100;

  return changePercent;
}
