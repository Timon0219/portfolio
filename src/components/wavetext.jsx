import React from "react";
import { Wave } from "react-animated-text";

const WaveText = () => (
	<div className="inline-block text-[64px]">
		<Wave
			text="Hi! I'm Andres, a full-stack developer."
			effect="stretch"
			effectChange="2"
		/>
	</div>
);

export default WaveText;
