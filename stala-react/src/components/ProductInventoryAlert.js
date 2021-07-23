function ProductInventoryAlert({ selectedSize, sizesInventory }) {
  return (
    <>
      {selectedSize && sizesInventory[selectedSize] < 1 ? (
        <div
          className="ps-3 border-danger text-danger letter-spacing-1 fs-5"
          role="alert"
          style={{
            borderWidth: "0 0 0 4px",
            borderStyle: "solid",
          }}
        >
          Size is not available
        </div>
      ) : (
        <span className="text-muted letter-spacing-1  fs-5">In Stock</span>
      )}
    </>
  );
}

export default ProductInventoryAlert;
