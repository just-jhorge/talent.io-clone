import symbol from "../../assets/symbol.svg";
import max from "../../assets/max.jpg";

const TeamUp = () => {
	return (
		<section className="w-full h-[536px] bg-mediumLightBlue relative ">
			<div className="container h-full w-full flex items-center justify-start left-0 right-0 relative3">
				<div className="relative h-full w-1/3">
					<img src={max} className="h-[536px] w-full" alt="" />
					<div className="absolute -right-6 bottom-10 px-2 py-3 rounded-md bg-white text-subtleBlue">
						<p className="text-[0.7rem]">
							<span className="font-bold">Max,</span>Talent advocate
						</p>
					</div>
				</div>
				<div className="ml-32 max-w-md py-20">
					<h3 className="text-3xl mb-10">
						Team up with your Talent Advocate for free expert advice!
					</h3>
					<p className="leading-relaxed">
						Upon joining talent.io, you will be matched with your dedicated
						Advocate. Consider her or him as your own agent and coach. Our
						Talent Advocates are local tech recruitment experts. They can help
						you negotiate the best salary, share insights about recruiting
						companies and their hiring processes before, and much more!
					</p>
				</div>
			</div>
			<img src={symbol} className="absolute right-0 top-0 bottom-0" alt="" />
		</section>
	);
};

export default TeamUp;
