"use client";
import Image from "next/image";
import DemoBurner from "../../../public/burner-02.jpg";
import DemoBurner2 from "../../../public/burner-03.jpg";
import { Trash2 } from "lucide-react";
import { useCart } from "@/app/context/context";

function Cart() {
  const { cart } = useCart();
  const { removeFromCart } = useCart();

  return (
    <div className='text-black flex flex-col'>
      <div className='flex justify-between font-bold px-5'>
        <h3 className=''>Subtotal</h3>
        <span>UGX 41,459</span>
      </div>
      <div className='flex flex-col gap-8 mt-5 px-5'>
        <span>CART ({cart.length})</span>
        {cart.map((item, i) => (
          <div className='flex flex-col px-2 shadow-md rounded-lg'>
            <div className='flex gap-4 py-4'>
              <div className='h-unit-3xl w-unit-4xl'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1080}
                  height={1080}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col'>
                <h4 className='text-small'>{item.title}</h4>
                <span className='text-black/50 text-sm'>Variation: 14433S</span>
                <p className='font-bold flex items-center gap-2'>
                  UGX {item.currentPrice}
                  <span className='text-black/50 text-xs  line-through'>
                    UGX {item.originalPrice}
                  </span>
                </p>
                <span className='text-black/50 text-sm pt-2'>In Stock</span>
              </div>
            </div>
            <div className='flex justify-between'>
              <button
                onClick={() => removeFromCart(item.id)}
                className='flex gap-2 items-center'
              >
                <Trash2 /> REMOVE
              </button>
              <div className='flex items-center font-bold rounded-sm gap-2 pb-3'>
                <button className='bg-amber-500 px-4 py-1 rounded-md shadow-md'>
                  -
                </button>
                <span>20</span>
                <button className='bg-amber-500 px-4 py-1 rounded-md shadow-md'>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
