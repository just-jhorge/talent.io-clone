import { countries } from "../../data/data";

const Locations = () => {
	return (
		<section className="bg-veryLightBlue py-20">
			<div className="container flex flex-col items-center justify-center">
				<div className="mb-14">
					<h2 className="text-veryDarkBlue text-6xl font-light mb-7">
						Supported <span className="text-subtleBlue">locations</span>
					</h2>
					<p className="text-center text-2xl">
						talent.io works with 7000+ companies based <br />
						in the following cities
					</p>
				</div>
				<div className="w-full grid grid-cols-5 gap-5">
					{countries.map((country) => (
						<div key={country.id} className="bg-white p-3 rounded-md">
							<div className="flex items-start justify-start gap-3 mb-5">
								<img
									src={country.flag}
									className="h-6 w-6 rounded-md"
									alt="Country Flag"
								/>
								<p className="text-xl">{country.country}</p>
							</div>
							<div>
								<p className="text-xs text-gray-500">{country.cities}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Locations;
