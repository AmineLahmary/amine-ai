import { useState } from 'react'


const LoginCard = (props) => {

    const {openCloseLoginCard} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if( email.trim() == '' && password.trim().length < 8 ) return;

        localStorage.setItem('login', JSON.stringify({ email: email, password}))
        openCloseLoginCard();
    }


    return (
        <dialog className="login-card-container animate-slide-down fixed top-0 z-50 w-full h-full bg-black/30 backdrop-blur flex justify-center items-center">
            <div className="bg-stone-800 p-8 rounded-[20px]">
                <h3 className="font-semibold text-2xl mb-10">Login To AmineAI</h3>
                <button onClick={openCloseLoginCard} className="absolute top-5 right-5 px-5">
                    Close 
                </button>
                <form onSubmit={onSubmitHandler} action="" className="flex flex-col gap-8">
                    <div className="flex flex-col relative">
                        <input
                        onChange={e => setEmail(e.target.value)} 
                        type="text" id="email" className="py-3 px-5 rounded-full bg-transparent border border-stone-600 focus:border-stone-300 [&:focus+label]:text-stone-300"/>  
                        <label htmlFor="email" className="absolute top-0 left-5 px-2  -translate-y-1/2 text-stone-600  transition-all duration-300 text-sm bg-stone-800">Username Or Email</label>
                    </div>
                    <div className="flex flex-col relative">
                        <input 
                        onChange={e => setPassword(e.target.value)}
                        type="password" id="password" className="py-3 px-5 rounded-full bg-transparent border border-stone-600 focus:border-stone-300 [&:focus+label]:text-stone-300"/>  
                        <label htmlFor="password" className="absolute top-0 left-5 px-2  -translate-y-1/2 text-stone-600  transition-all duration-300 text-sm bg-stone-800">Password</label>

                    </div>
                    <div className="flex gap-3 pl-5 [&_input]:bg-red-300">
                        <input type="checkbox" id="remeberMe" className="[&:checked+label]:text-stone-300" />
                        <label htmlFor="remeberMe" className="text-stone-600" >Remeber me</label>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </dialog>
    );
}

export default LoginCard;