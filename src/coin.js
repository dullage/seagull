class Coin {
  constructor(
    id,
    symbol,
    name,
    imageUrl,
    currentPrice,
    marketCap,
    marketCapRank,
    holdingUnits,
    isTarget
  ) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.imageUrl = imageUrl;
    this.currentPrice = currentPrice;
    this.marketCap = marketCap;
    this.marketCapRank = marketCapRank;
    this.holdingUnits = holdingUnits;
    this.isTarget = isTarget;

    this.targetPct = 0;
    this.targetValue = 0;
  }

  get holdingValue() {
    return this.holdingUnits * this.currentPrice;
  }

  get targetUnits() {
    return this.targetValue / this.currentPrice;
  }

  get targetUnitsDiff() {
    return this.holdingUnits - this.targetUnits;
  }

  get targetValueDiff() {
    return this.targetUnitsDiff * this.currentPrice;
  }

  get imageThumb() {
      return this.imageUrl.replace("/large/", "/thumb/")
  }
}

export default Coin;