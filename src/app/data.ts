export const siteData = {
  companyName: 'Aussie Premium Solar',
  tagline: 'Premium Solar & Battery Solutions',
  description: 'Aussie Premium Solar is a proudly Australian company delivering premium solar and battery installations with experienced in-house installers and trusted local workmanship.',
  whatsappLink: 'https://wa.me/+61480033012',
  contact: {
    phone: '1300 001 708',
    email: 'info@aussiepremiumsolar.com.au',
    address: 'Level 14/3 Parramatta Square, 153 Macquarie St, Parramatta NSW 2150, Australia',
    partner: 'Wise Solar Electrical',
    // EmailJS Configuration
    // Go to https://www.emailjs.com/ to create an account and get these keys
    emailJS: {
      serviceId: 'service_SolarWeb', // e.g., 'service_xxxxx'
      templateId: 'template_solarWeb', // e.g., 'template_xxxxx'
      publicKey: '60NMyMvvjVUgnbMKG', // e.g., 'YOUR_PUBLIC_KEY' (User ID)
    }
  },
  suppliers: [
    { name: 'AlphaESS', logo: '/AlphaESS.png' },
    { name: 'FoxESS', logo: '/FoxESS.png' },
    { name: 'JA', logo: '/JA.png' },
    { name: 'JINKO', logo: '/JINKO.svg' },
    { name: 'GoodWe', logo: '/GoodWe.png' },
    { name: 'TRINA', logo: '/TRINA.jpg' },
    { name: 'SigEnergy', logo: '/SigEnergy.png' }
  ],
  services: [
    {
      title: 'Residential Solar',
      description: 'Premium rooftop solar systems designed for homes using high-quality panels, inverters, and expert local installation.',
      iconText: 'solar_power'
    },
    {
      title: 'Battery Storage',
      description: 'Store your excess solar energy and reduce dependence on rising electricity costs with advanced battery solutions.',
      iconText: 'battery_charging_full'
    },
    {
      title: 'Commercial Solar',
      description: 'Custom-designed commercial solar solutions to help businesses reduce operating costs and improve energy efficiency.',
      iconText: 'domain'
    },
    {
      title: 'CEC Certified',
      description: 'All installations are completed by experienced installers and CEC-certified professionals.',
      iconText: 'verified'
    }
  ],
  whyChoose: [
    '100% Australian local company',
    '10 Years Workmanship Warranty',
    'CEC Certified installers only',
    'Solar & battery specialists',
    'Residential & commercial systems',
  ],
  testimonials: [
    {
      name: 'John D.',
      text: 'Fantastic service from start to finish. Our energy bills have dropped significantly.',
      role: 'Homeowner, Perth'
    },
    {
      name: 'Sarah M.',
      text: 'Highly professional team. The installation was quick, clean, and the system works perfectly.',
      role: 'Business Owner, Australia'
    },
    {
      name: 'David L.',
      text: 'Great communication and a very competitive price. Highly recommend their battery solutions.',
      role: 'Resident, Fremantle'
    }
  ],
  images: {
    heroBg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop',
    whyChooseBg: 'https://images.unsplash.com/photo-1641290126851-610704d11b23?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  gallery: [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Australian Local' },
    { value: 'CEC', label: 'Certified' },
    { value: 'Premium', label: 'Quality' }
  ],
  blogs: [
    {
      title: 'Top 5 Benefits of Solar Panels in Australia',
      slug: 'top-5-benefits-of-solar-panels-in',
      summary: 'Discover the incredible advantages of installing solar panels, from drastically reducing your energy bills to increasing your home\'s value.',
      content: `
        <p class="mb-4">Australia is known for its abundant sunshine, making it one of the best places in the world to invest in solar energy. If you're considering making the switch, here are the top 5 benefits of installing solar panels.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">1. Massive Reductions in Energy Bills</h2>
        <p class="mb-4">With electricity prices consistently on the rise, generating your own power is the most effective way to shield yourself from utility rate hikes. Most households see a dramatic drop in their energy costs from day one.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">2. Government Rebates and Incentives</h2>
        <p class="mb-4">The Australian government continues to offer generous rebates (STCs) that significantly reduce the upfront cost of solar installation. Taking advantage of these incentives makes solar more affordable than ever.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">3. Increased Property Value</h2>
        <p class="mb-4">Homes equipped with solar energy systems are highly attractive to buyers. A premium solar installation can increase your property's value, offering a great return on investment even if you decide to sell.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">4. Environmental Impact</h2>
        <p class="mb-4">By switching to renewable energy, you significantly reduce your carbon footprint. Solar power produces zero emissions, helping to keep clean and green for future generations.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">5. Energy Independence</h2>
        <p class="mb-4">Pairing your solar panels with a battery storage system gives you ultimate control over your energy usage, reducing your reliance on the grid and protecting you from blackouts.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1733306416524-051af34aa7bd?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'benefits of solar panels, solar savings Perth, solar incentives Australia',
      description: 'Discover the top 5 benefits of installing solar panels in Australia, including lower energy bills and increased home value.'
    },
    {
      title: 'How Solar Batteries Work and Why You Need One',
      slug: 'how-solar-batteries-work-and-why-you-need-one',
      summary: 'A comprehensive guide to understanding solar battery storage systems and why they are essential for modern homes.',
      content: `
        <p class="mb-4">Solar panels are fantastic at generating power during the day, but what happens when the sun goes down? This is where solar batteries come in.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Understanding Solar Batteries</h2>
        <p class="mb-4">A solar battery stores the excess electricity generated by your solar panels during peak daylight hours. Instead of sending this surplus energy back to the grid for a minimal feed-in tariff, you store it for your own use.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Why You Need a Battery</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Use Solar Power at Night:</strong> Power your home through the evening and night using the free energy you captured during the day.</li>
          <li class="mb-2"><strong>Blackout Protection:</strong> Many modern battery systems offer backup capabilities, keeping your essential appliances running during grid outages.</li>
          <li class="mb-2"><strong>Maximize Savings:</strong> By relying less on grid electricity during expensive peak evening hours, you maximize your financial return on your solar investment.</li>
        </ul>
        <p class="mb-4">Investing in a battery storage solution from Aussie Premium Solar ensures you get the most out of every ray of sunshine.</p>
      `,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
      author: 'Aussie Premium Solar',
      keywords: 'solar batteries Perth, how solar batteries work, solar energy storage',
      description: 'Learn how solar batteries work and discover why adding battery storage to your solar system in is a smart investment.'
    },
    {
      title: 'Government Solar Rebates in Australia 2026',
      slug: 'government-solar-rebates-2026',
      summary: 'Everything you need to know about current government solar rebates and incentives available for residents in 2026.',
      content: `
        <p class="mb-4">Understanding government incentives can make your transition to solar energy much more affordable. Here is a breakdown of what’s available in for 2026.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Small-scale Technology Certificates (STCs)</h2>
        <p class="mb-4">The federal STC scheme is still the primary mechanism for reducing the upfront cost of solar installations. When you install an eligible system, it creates STCs, which are typically applied as an upfront discount by your installer. While the scheme phases out slowly each year until 2030, the savings in 2026 remain substantial.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Distributed Energy Buyback Scheme (DEBS)</h2>
        <p class="mb-4">In Australia, DEBS pays eligible customers for the excess electricity they export to the grid. It offers different rates depending on the time of day, encouraging battery storage and self-consumption during the evening peak.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">How to Claim</h2>
        <p class="mb-4">The best part about these incentives is that reputable, CEC-certified installers like Aussie Premium Solar handle the paperwork for you, applying the STC discount directly to your quote.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1678743133495-49199baeb582?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'solar rebates 2026, government solar incentives Perth, STC discount Australia',
      description: 'Get the latest information on government solar rebates and incentives in Australia for 2026, including STCs and DEBS.'
    },
    {
      title: 'Residential vs. Commercial Solar: What\'s the Difference?',
      slug: 'residential-vs-commercial-solar-differences',
      summary: 'Explore the key differences between residential and commercial solar installations, from system size to financial benefits.',
      content: `
        <p class="mb-4">While the fundamental technology behind residential and commercial solar systems is the same, their application, scale, and financial structures differ significantly.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">System Size and Complexity</h2>
        <p class="mb-4">Residential systems typically range from 5kW to 15kW, designed to offset a family's daily energy use. Commercial systems, on the other hand, can range from 30kW to multi-megawatt installations, requiring more complex engineering, specialized mounting systems, and advanced grid protection relays.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Energy Consumption Patterns</h2>
        <p class="mb-4">Businesses usually consume the bulk of their energy during daylight hours (9 AM - 5 PM), aligning perfectly with peak solar generation. This means commercial solar systems often achieve higher self-consumption rates compared to residential properties, where energy use spikes in the morning and evening.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Financial Incentives and ROI</h2>
        <p class="mb-4">Commercial installations offer incredible ROI, often paying for themselves in 3-5 years due to high daylight consumption and tax benefits like instant asset write-offs (depending on current legislation). Residential ROI is also strong but typically closer to 4-7 years.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1682144291286-49f5dd16965e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'residential vs commercial solar, commercial solar Perth, business solar',
      description: 'Learn the key differences between residential and commercial solar systems, including size, complexity, and return on investment.'
    },
    {
      title: 'Maximizing Your Solar Energy Savings During Summer',
      slug: 'maximizing-solar-energy-savings-summer',
      summary: 'Practical tips and strategies to get the absolute most out of your solar panel system during the scorching summers.',
      content: `
        <p class="mb-4">Summer in Australia means two things: air conditioning and abundant sunshine. Here is how you can use the latter to pay for the former.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Shift Your Energy Usage</h2>
        <p class="mb-4">Run heavy appliances—like your washing machine, dishwasher, and pool pump—during the middle of the day when your solar panels are producing peak power. Use timers if you are not home.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Pre-cool Your Home</h2>
        <p class="mb-4">Set your air conditioner to run in the afternoon using solar power to pre-cool your house. By the time the sun goes down, your home will be comfortable, requiring less grid energy to maintain the temperature into the evening.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Keep Panels Clean</h2>
        <p class="mb-4">Dust and debris can accumulate during dry summer months, reducing panel efficiency. A quick professional clean can boost output by up to 15%.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1714945021967-1071a42ea817?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'maximize solar savings, solar tips summer, reducing energy bills',
      description: 'Discover practical tips for maximizing your solar energy savings and efficiently running your AC during the hot Australian summer.'
    },
    {
      title: 'The True Cost of Installing Solar Panels in Perth',
      slug: 'true-cost-installing-solar-panels-perth',
      summary: 'A transparent breakdown of solar panel installation costs in Perth, what factors affect the price, and what to watch out for.',
      content: `
        <p class="mb-4">When considering solar, "How much does it cost?" is the first question on everyone's mind. While prices vary, it's crucial to understand what you are paying for.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Average Costs in Perth</h2>
        <p class="mb-4">As of 2026, a high-quality 6.6kW system—the most common residential size—typically ranges between $5,500 and $8,500 fully installed after the STC rebate. The variation depends heavily on the quality of the components.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Factors Affecting Price</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Panel Quality:</strong> Tier 1 panels (like Tier 1 N-Type) cost more upfront but degrade slower and yield better long-term returns.</li>
          <li class="mb-2"><strong>Inverter Type:</strong> String inverters are cost-effective, while microinverters or optimized systems cost more but handle shading better.</li>
          <li class="mb-2"><strong>Installation Quality:</strong> CEC-certified, in-house installers ensure safety and compliance, unlike cheaper sub-contracted labor.</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Beware of "Cheap" Solar</h2>
        <p class="mb-4">Systems advertised well below market average often cut corners on safety components, use low-quality panels that fail within a few years, or provide zero after-sales support.</p>
      `,
      image: 'https://images.unsplash.com/photo-1655300256335-beef51a914fe?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'solar panel cost Perth, solar installation prices Australia, cheap solar warning',
      description: 'Get a transparent breakdown of the true cost of installing solar panels in Perth, including factors that affect pricing and why to avoid cheap solar.'
    },
    {
      title: 'Do Solar Panels Work on Cloudy Days?',
      slug: 'do-solar-panels-work-on-cloudy-days',
      summary: 'Uncovering the truth about how weather conditions affect solar panel efficiency and power generation.',
      content: `
        <p class="mb-4">A common misconception is that solar panels stop working the moment clouds roll in. Fortunately, this isn't true.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">How They Work Without Direct Sunlight</h2>
        <p class="mb-4">Solar panels generate electricity from daylight, not just direct sunlight. While direct, intense sun produces maximum output, panels still capture diffuse light that penetrates through clouds.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Expected Efficiency Drop</h2>
        <p class="mb-4">On a heavily overcast day, a system might produce between 10% to 25% of its typical capacity. While this is a drop, modern premium panels are incredibly efficient in low-light conditions.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Why Australia is Perfect Regardless</h2>
        <p class="mb-4">Perth is one of the sunniest cities in the world, averaging around 147 clear days a year. The massive over-production during clear days more than makes up for the occasional cloudy spell, especially if you utilize battery storage.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1663091717228-8e1b29d13459?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'solar panels cloudy days, solar efficiency weather, solar panels winter Australia',
      description: 'Find out the truth about how solar panels perform on cloudy days and why Australia is an ideal location for solar energy regardless of the weather.'
    },
    {
      title: 'Why You Should Choose a Local Australian Solar Installer',
      slug: 'why-choose-local-solar-installer',
      summary: 'The critical reasons why working with a local Australian solar company is better than going with a national retailer.',
      content: `
        <p class="mb-4">When buying a solar system, who installs it is just as important as what is installed. Here is why local is always better.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Local Knowledge</h2>
        <p class="mb-4">A local Australia company understands the specific requirements of Power, the regional weather patterns, and the best mounting solutions for roofing types.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">In-House Installers vs. Subcontractors</h2>
        <p class="mb-4">National retailers often sell you a system and subcontract the work to the lowest bidder. Local companies like Aussie Premium Solar use their own trusted, in-house installers, ensuring strict quality control and accountability.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Reliable After-Sales Support</h2>
        <p class="mb-4">If an issue arises, you want a local team who can be on-site quickly to resolve it, rather than dealing with an interstate call center that puts you on hold.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'local solar installer Perth, solar company, Aussie Premium Solar installers',
      description: 'Discover the advantages of choosing a local Australian solar installer over national retailers, from in-house expertise to superior after-sales support.'
    },
    {
      title: 'Off-Grid vs. Grid-Tied Solar Systems Explained',
      slug: 'off-grid-vs-grid-tied-solar-systems-explained',
      summary: 'Confused by solar terminology? We explain the differences between off-grid, grid-tied, and hybrid solar systems.',
      content: `
        <p class="mb-4">Choosing the right solar architecture is crucial for meeting your energy goals. Here is a simple breakdown.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Grid-Tied Systems</h2>
        <p class="mb-4">This is the most common residential setup. Your system is connected to the municipal power grid. When you produce excess energy, it goes to the grid. When you need more energy than you produce (at night), you draw from the grid.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Off-Grid Systems</h2>
        <p class="mb-4">Off-grid systems are entirely independent of the utility company. They require large battery banks and often backup generators to ensure power is available 24/7. These are essential for remote properties but are usually too expensive and unnecessary for urban homes.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Hybrid Systems (Grid-Tied with Battery)</h2>
        <p class="mb-4">The best of both worlds. You remain connected to the grid but have a battery to store excess solar for nighttime use or during blackouts. This offers energy security and maximum savings.</p>
      `,
      image: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'off grid solar Australia, grid tied solar Perth, hybrid solar systems',
      description: 'Learn the differences between off-grid, grid-tied, and hybrid solar systems to determine which setup is right for your property.'
    },
    {
      title: 'Cleaning and Maintaining Your Solar Panels for Peak Performance',
      slug: 'cleaning-and-maintaining-solar-panels',
      summary: 'A simple guide to solar panel maintenance to ensure your system operates at maximum efficiency year-round.',
      content: `
        <p class="mb-4">Solar systems are incredibly low maintenance, as they have no moving parts. However, a little care goes a long way in preserving their efficiency.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Do You Need to Clean Them?</h2>
        <p class="mb-4">Generally, rainwater does a decent job of washing away light dust. However, in dry summers, or if you live near busy roads or areas with heavy bird populations, grime can accumulate.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">How to Clean Your Panels</h2>
        <p class="mb-4">If you choose to clean them yourself, do so safely from the ground using a hose. Avoid abrasive sponges, harsh chemicals, or pressure washers, which can scratch the glass and void your warranty. When in doubt, hire a professional solar cleaner.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Annual Health Checks</h2>
        <p class="mb-4">Beyond cleaning, it is recommended to have a professional inspection every 1-2 years to check inverter performance, ensure wiring integrity, and inspect mounting hardware.</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Aussie Premium Solar',
      keywords: 'solar panel cleaning Perth, solar maintenance, solar panel efficiency',
      description: 'Read our simple guide on how to clean and maintain your solar panels to ensure they operate at peak performance year-round.'
    }
  ],
  products: [
    {
      title: 'Premium Solar Panel 400W',
      slug: 'premium-solar-panel-400w',
      // summary: 'High-efficiency monocrystalline solar panels built for the harsh Australian climate, offering superior durability and performance.',
      content: `
        <p class="mb-4">Upgrade your home with our Premium Solar Panel 400W. Designed specifically for high efficiency in both direct and low light conditions.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Key Features</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>High Efficiency:</strong> Up to 22% conversion rate ensures maximum power generation even on cloudy days.</li>
          <li class="mb-2"><strong>Durability:</strong> Built to withstand severe weather, including heavy rain and strong winds.</li>
          <li class="mb-2"><strong>25-Year Warranty:</strong> Enjoy peace of mind with our industry-leading performance warranty.</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Specifications</h2>
        <p class="mb-4">Power Output: 400W<br>Cell Type: Monocrystalline<br>Dimensions: 1722 x 1134 x 30 mm</p>
      `,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Smart Solar Inverter 5kW',
      slug: 'smart-solar-inverter-5kw',
      //summary: 'Advanced string inverter with built-in Wi-Fi monitoring and smart grid capabilities to maximize your energy usage.',
      content: `
        <p class="mb-4">The Smart Solar Inverter 5kW is the brain of your solar system, converting DC power to usable AC power with incredible efficiency.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Key Features</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Smart Monitoring:</strong> Track your energy production and consumption in real-time via our mobile app.</li>
          <li class="mb-2"><strong>High Efficiency:</strong> 98.4% maximum efficiency for maximum energy yield.</li>
          <li class="mb-2"><strong>Quiet Operation:</strong> Fanless design ensures silent operation inside or outside your home.</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Specifications</h2>
        <p class="mb-4">Max Output: 5000W<br>Phase: Single Phase<br>Warranty: 10 Years</p>
      `,
      image: 'https://plus.unsplash.com/premium_photo-1678743133495-49199baeb582?q=80&w=1171&auto=format&fit=crop'
    },
    {
      title: 'Home Battery Storage 10kWh',
      slug: 'home-battery-storage-10kwh',
      // summary: 'Store your excess solar energy for nighttime use and protect your home against grid blackouts with our premium battery.',
      content: `
        <p class="mb-4">Achieve true energy independence with our Home Battery Storage 10kWh. Store excess energy generated during the day and use it when you need it most.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Key Features</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Blackout Protection:</strong> Automatically powers essential appliances during grid outages.</li>
          <li class="mb-2"><strong>High Capacity:</strong> 10kWh usable energy, enough to power most homes through the night.</li>
          <li class="mb-2"><strong>Compact Design:</strong> Sleek, wall-mounted unit that saves space in your garage.</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Specifications</h2>
        <p class="mb-4">Usable Capacity: 10kWh<br>Chemistry: Lithium Iron Phosphate (LiFePO4)<br>Warranty: 10 Years</p>
      `,
      image: 'https://images.unsplash.com/photo-1655300256335-beef51a914fe?q=80&w=1331&auto=format&fit=crop'
    }
  ]
};
