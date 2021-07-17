import Modal from "./Modal";

function SizeGuide() {
  return (
    <Modal title={<span>Size Guide</span>}>
      <p>
        We are fully compliant with standard sizes in all of our departments.
        For a comprehensive size guide, click here:
        <a
          className="letter-spacing-1 fw-bold"
          href="https://www.sizeguide.net/"
          target="_blank"
        >
          {" "}
          SIZEGUIDE.NET
        </a>
      </p>
    </Modal>
  );
}

export default SizeGuide;
