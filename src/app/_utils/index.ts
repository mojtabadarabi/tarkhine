export const calculateFoodPrice = (price: string | number, discount: string | number): number => {
    const numericPrice = typeof price === 'number' ? price : Number(price || 0)
    const numericDiscount = typeof discount === 'number' ? discount : Number(discount || 0)
    return numericPrice - ((numericPrice * numericDiscount) / 100)
}