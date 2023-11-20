export default function Button({ title }) {
  return (
    <div>
      <button className='bg-[#0E7490] w-full px-4 py-3 rounded-lg'>
        {title}
      </button>
    </div>
  );
}
