export default function GuaranteeItem({ img, title, description }) {
  return (
    <div className="services-items">
      <img src={img} alt="service-imgs" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
