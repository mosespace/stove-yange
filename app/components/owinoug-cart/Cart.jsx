"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { Trash2 } from "lucide-react";
import { useCart } from "@/app/context/context";

function Cart() {
  const { cart } = useCart();
  const { removeFromCart } = useCart();
  const productNames = cart.map((item) => item.title);

  const totalPrice = cart.reduce((total, item) => total + item.currentPrice, 0);
  // Format totalPrice with commas
  const formattedTotalPrice = totalPrice.toLocaleString();

  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  const orderMessage = `I was browsing on your website and i came across these products and decided to purchase theme \nPrice: ${roundedTotalPrice} \nTitles: ${productNames.join(
    ", "
  )}`;

  const encodedMessage = encodeURIComponent(orderMessage);
  const contactNumber = "+256770981193";
  const address = `https://wa.me/${contactNumber}?text=${encodedMessage}`;
  return (
    <>
      {cart.length > 0 ? (
        <div className='text-black flex flex-col'>
          <div className='flex justify-between font-bold px-5'>
            <h3 className=''>Total Price</h3>
            <span>UGX {formattedTotalPrice}</span>
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
                    <span className='text-black/50 text-sm'>
                      Variation: 14433S
                    </span>
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
          <div className='pt-20 px-5'>
            <Link href={address} target='_blank' rel='noopener noreferrer'>
              <Button title='Order Now' />
            </Link>
          </div>
        </div>
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1>There Are No Items To Show At This Time</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
