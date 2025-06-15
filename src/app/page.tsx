import Link from "next/link"

export default function Home() {
    return (
        <div className="bg-black home-img bg-cover bg-center">
            <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
                <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
                    <h1 className="font-bold text-4xl">
                        Repair Shop
                    </h1>
                    <address>
                        somewhere22 <br/>
                        12345, City
                    </address>
                    <p>
                        Open daily 9 - 5
                    </p>
                    <Link href="tel:15256292016" className="hover:underline">
                        1525-629-2016
                    </Link>
                </div>
            </main>
        </div>
    );
}
