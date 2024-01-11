import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './Temp.jsx'
import useInfo from './hook.js'
function App() {
  //const [count, setCount] = useState(0)
  const [amount,setamount]=useState(1);
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const [covertedam,setconvam]=useState(0)
  const data=useInfo(from);
  const options=Object.keys(data||{});
  const swap=()=>{
    setfrom(to);
   setto(from);
   setconvam(amount);
   setamount(covertedam);
  }
  const convert=()=>{
    setconvam(amount*data[to]);
  }
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `https://www.pexels.com/photo/empty-brown-canvas-235985/`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   convert()
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="from"
                        amount={amount}
                        onAmountChange={(am)=>setamount(am)}
                        onCurrencyChange={(curr)=>setfrom(curr)}
                        currencyopt={options}
                        selectcurrency={from}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={covertedam}
                        amountdisabled
                        onCurrencyChange={(curr)=>setto(curr)}
                        currencyopt={options}
                        selectcurrency={to}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert 
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
