export default function Avatar({ url }) {
  return (
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
}
