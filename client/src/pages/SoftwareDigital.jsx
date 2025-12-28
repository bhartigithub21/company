import React from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { sections } from "./softwarepagesections"

const SoftwareDigital = () => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	}

	return (
		<div className='page-container'>
			{/* ================= HERO SECTION ================= */}

			<section className='iot-hero-section'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}>
					<h1 className='iot-hero-title'>Software & Digital Solutions</h1>
					<p className='iot-hero-subtitle'>
						Empowering modern institutions with next-generation digital tools.
						From campus automation to smart healthcare, we build secure and
						scalable digital ecosystems.
					</p>
				</motion.div>
			</section>

			{/* ================= CONTENT SECTIONS ================= */}
			<section className='container pb-32 space-y-32'>
				{sections.map((section, index) => (
					<motion.div
						key={section.id}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: "-100px" }}
						variants={fadeInUp}
						className={`flex flex-col md:flex-row gap-14 items-center ${
							index % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}>
						{/* -------- TEXT -------- */}
						<div className='flex-1 space-y-6'>
							<div
								className='inline-flex items-center justify-center w-16 h-16 
                rounded-2xl bg-white/5 border border-white/10'
								style={{ color: section.color }}>
								{section.icon}
							</div>

							<h2 className='text-4xl font-bold'>{section.title}</h2>

							<p className='text-lg text-slate-400 leading-relaxed'>
								{section.desc}
							</p>

							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
								{section.features.map((feature, i) => (
									<div key={i} className='flex gap-3 items-start'>
										<CheckCircle size={18} className='text-cyan-400 mt-1' />
										<span className='text-slate-300'>{feature}</span>
									</div>
								))}
							</div>
						</div>

						{/* -------- VISUAL -------- */}
						<div className='flex-1 w-full'>
							<div
								className='relative aspect-video rounded-3xl 
                bg-gradient-to-br from-white/5 to-transparent 
                border border-white/10 overflow-hidden group'>
								<div
									className='absolute inset-0 bg-cyan-400/5 
                  group-hover:bg-cyan-400/10 transition-all duration-500'
								/>

								<div
									className='relative z-10 m-8 h-[70%] bg-slate-900/90 
                  rounded-xl border border-white/10 p-6 
                  group-hover:scale-105 transition-transform duration-500'>
									<div className='w-1/3 h-2 bg-slate-700 rounded-full mb-6' />

									<div className='space-y-3'>
										<div className='h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg' />
										<div className='h-14 bg-white/5 rounded-lg' />
										<div className='h-14 w-2/3 bg-white/5 rounded-lg' />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</section>
		</div>
	)
}

export default SoftwareDigital
