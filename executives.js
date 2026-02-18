// ─────────────────────────────────────────────────────────────────────────────
// executives.js  —  Just People Meeting  |  People data file
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO UPDATE:
//   • Add / remove executives from the EXECUTIVES array below
//   • Each entry needs: id, name, title, photo (full URL), bio (string), facts (array)
//   • Photo URLs: JPMC → https://www.jpmorganchase.com/content/dam/...
//                 Chase → https://media.chase.com/content/dam/...
//   • facts[] are used to generate quiz questions — aim for 4–5 per person
//   • id must be unique (kebab-case, no spaces)
// ─────────────────────────────────────────────────────────────────────────────

const EXECUTIVES = [

  // ══════════════════════════════════════════════════════════════════════════
  //  JPMC BOARD OF DIRECTORS  (10 independent directors)
  //  Source: jpmorganchase.com/about/leadership
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "linda-bammann",
    name: "Linda B. Bammann",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-lindabbammann.jpg",
    bio: "Linda B. Bammann has served on the JPMorganChase Board of Directors since 2013. She is a former senior executive at JPMorgan and Bank One with deep expertise in risk management at large financial institutions. She chairs the Board's Risk Committee.",
    facts: [
      "has served on the JPMorganChase board since 2013",
      "chairs the Board's Risk Committee",
      "is a former senior executive at Bank One",
      "brings deep expertise in risk management at large financial institutions"
    ]
  },

  {
    id: "michele-buck",
    name: "Michele G. Buck",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-michele-g-buck.jpg",
    bio: "Michele G. Buck joined the JPMorganChase Board of Directors in 2025. She was previously Chairman, President and Chief Executive Officer of The Hershey Company, one of the world's largest chocolate manufacturers.",
    facts: [
      "joined the JPMorganChase board in 2025",
      "was previously Chairman, President and CEO of The Hershey Company",
      "is one of the newest members of the JPMorganChase board",
      "brings deep consumer brand and retail expertise to the board"
    ]
  },

  {
    id: "stephen-burke",
    name: "Stephen B. Burke",
    title: "Lead Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-stephenbburke.jpg",
    bio: "Stephen B. Burke has served on the JPMorganChase Board of Directors since 2004, making him the longest-serving independent director. He serves as Lead Independent Director and chairs the Compensation & Management Development Committee. He was previously CEO of NBCUniversal for over a decade.",
    facts: [
      "has served on the JPMorganChase board since 2004 — the longest-serving independent director",
      "serves as Lead Independent Director of the board",
      "was CEO of NBCUniversal for over a decade",
      "chairs the Compensation & Management Development Committee"
    ]
  },

  {
    id: "alicia-boler-davis",
    name: "Alicia Boler Davis",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-alicia-boler-davis.jpg",
    bio: "Alicia Boler Davis joined the JPMorganChase Board of Directors in 2023. She is CEO of Alto Pharmacy, a digital pharmacy company. She previously led Amazon's global fulfillment operations and brings extensive technology and operations leadership experience.",
    facts: [
      "joined the JPMorganChase board in 2023",
      "is currently CEO of Alto Pharmacy, a digital pharmacy company",
      "previously led Amazon's global fulfillment network operations",
      "brings extensive technology and large-scale operations leadership experience"
    ]
  },

  {
    id: "alex-gorsky",
    name: "Alex Gorsky",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-alex-gorsky.jpg",
    bio: "Alex Gorsky joined the JPMorganChase Board of Directors in 2022. He was previously Chairman and CEO of Johnson & Johnson. He is a West Point graduate and former U.S. Army officer, and was a member of the J.P. Morgan International Council before joining the board.",
    facts: [
      "joined the JPMorganChase board in 2022",
      "was previously Chairman and CEO of Johnson & Johnson",
      "is a West Point graduate and former U.S. Army officer",
      "was a member of the J.P. Morgan International Council before joining the board"
    ]
  },

  {
    id: "mellody-hobson",
    name: "Mellody Hobson",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-mellody-hobson.jpg",
    bio: "Mellody Hobson has served on the JPMorganChase Board since 2018. She is Co-CEO and President of Ariel Investments, a Chicago-based asset management firm. She is a Princeton University graduate and chairs the Board's Public Responsibility Committee.",
    facts: [
      "has served on the JPMorganChase board since 2018",
      "is Co-CEO and President of Ariel Investments",
      "is a Princeton University graduate",
      "chairs the Board's Public Responsibility Committee"
    ]
  },

  {
    id: "phebe-novakovic",
    name: "Phebe N. Novakovic",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-phebe-novakovic.jpg",
    bio: "Phebe N. Novakovic has served on the JPMorganChase Board since 2020. She is Chairman and CEO of General Dynamics, one of the world's largest aerospace and defense companies. She previously worked at the CIA and the U.S. Department of Defense.",
    facts: [
      "has served on the JPMorganChase board since 2020",
      "is Chairman and CEO of General Dynamics, an aerospace and defense company",
      "previously worked at the CIA and the U.S. Department of Defense",
      "is considered one of the most powerful women in the defense industry"
    ]
  },

  {
    id: "virginia-rometty",
    name: "Virginia M. Rometty",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-ginni.jpg",
    bio: "Virginia M. Rometty has served on the JPMorganChase Board since 2020. She was Executive Chairman, President and CEO of IBM, and was the first female CEO in IBM's 100-year history. She is a Northwestern University graduate.",
    facts: [
      "has served on the JPMorganChase board since 2020",
      "was the first female CEO in IBM's 100-year history",
      "served as Executive Chairman, President and CEO of IBM",
      "is a Northwestern University graduate"
    ]
  },

  {
    id: "brad-smith",
    name: "Brad D. Smith",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-brad-d-smith.png",
    bio: "Brad D. Smith joined the JPMorganChase Board of Directors in 2025. He is President of Marshall University and was previously Executive Chairman, President and CEO of Intuit, the maker of TurboTax and QuickBooks.",
    facts: [
      "joined the JPMorganChase board in 2025",
      "is currently President of Marshall University",
      "was previously Executive Chairman, President and CEO of Intuit",
      "led Intuit through the launches of TurboTax Live and QuickBooks Online"
    ]
  },

  {
    id: "mark-weinberger",
    name: "Mark A. Weinberger",
    title: "Independent Director, JPMorganChase Board",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-mark-weinberger.jpg",
    bio: "Mark A. Weinberger joined the JPMorganChase Board in 2024. He was Global Chairman and CEO of Ernst & Young from 2013 to 2019, and previously served as Assistant Secretary of the U.S. Department of the Treasury (Tax Policy) under President George W. Bush. He chairs the Board's Audit Committee.",
    facts: [
      "joined the JPMorganChase board in 2024",
      "was Global Chairman and CEO of Ernst & Young from 2013 to 2019",
      "served as Assistant Secretary of the U.S. Treasury under President George W. Bush",
      "chairs the Board's Audit Committee"
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  JPMC OPERATING COMMITTEE  (13 members)
  //  Source: jpmorganchase.com/about/leadership
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "jamie-dimon",
    name: "Jamie Dimon",
    title: "Chairman & Chief Executive Officer, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/who-we-are/our-leadership/headshots/headshot-jamiedimon.png",
    bio: "Jamie Dimon is Chairman of the Board and Chief Executive Officer of JPMorganChase. He has led the firm since becoming CEO on January 1, 2006. He joined as Chairman and CEO of Bank One in 2000 and became President and COO of the combined firm following its 2004 merger. He began his career at American Express and later served as President of Citigroup. He holds an AB from Tufts University and an MBA from Harvard Business School.",
    facts: [
      "has led the firm as CEO since January 1, 2006",
      "previously led Bank One before its 2004 merger with the firm",
      "writes a closely-read annual shareholder letter every year",
      "holds an MBA from Harvard Business School",
      "began his career at American Express before leading Citigroup divisions"
    ]
  },

  {
    id: "ashley-bacon",
    name: "Ashley Bacon",
    title: "Chief Risk Officer, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-abacon.jpg",
    bio: "Ashley Bacon is the Chief Risk Officer of JPMorganChase and a member of the firm's Operating Committee. He oversees all risk management and compliance across the entire firm. He joined the firm's Risk organization in 2006 and also worked in Tokyo, Singapore and London offices. Before joining J.P. Morgan in 1993, he traded international government bonds for Daiwa Securities. He holds a degree in Monetary Economics from the London School of Economics.",
    facts: [
      "oversees all risk management across every division of the firm",
      "holds a degree in Monetary Economics from the London School of Economics",
      "joined the firm in 1993 after trading government bonds at Daiwa Securities",
      "has worked in the firm's Tokyo, Singapore and London offices"
    ]
  },

  {
    id: "jeremy-barnum",
    name: "Jeremy Barnum",
    title: "Chief Financial Officer, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-jeremy-barnum.jpg",
    bio: "Jeremy Barnum is Chief Financial Officer of JPMorganChase. He has been with the firm since 1994 and previously led Global Research in the Corporate & Investment Bank, as well as serving as CFO and Chief of Staff of the CIB from 2013 to 2021. He graduated from Harvard College with a degree in Chemistry.",
    facts: [
      "has been with the firm since 1994",
      "previously led Global Research in the investment bank",
      "graduated from Harvard College with a degree in Chemistry",
      "became CFO in 2021, succeeding Jennifer Piepszak in that role"
    ]
  },

  {
    id: "lori-beer",
    name: "Lori Beer",
    title: "Global Chief Information Officer, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-lbeer.jpg",
    bio: "Lori Beer is the Global Chief Information Officer of JPMorganChase. She joined in 2014 from WellPoint (now Anthem), where she was EVP of Specialty Businesses and Information Technology. She manages a $14 billion technology budget and over 55,000 technologists worldwide, and co-sponsors the firm's Access Ability Business Resource Group.",
    facts: [
      "manages a technology budget of $14 billion and over 55,000 technologists",
      "joined the firm in 2014 from WellPoint (now Anthem)",
      "leads the firm's cloud and infrastructure transformation globally",
      "co-sponsors the firm's Access Ability Business Resource Group"
    ]
  },

  {
    id: "tim-berry",
    name: "Tim Berry",
    title: "Global Head of Corporate Responsibility, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-tim-berry.jpg",
    bio: "Tim Berry is the Global Head of Corporate Responsibility at JPMorganChase. He leads the firm's corporate responsibility and philanthropic strategy, overseeing billions in community development investment with a focus on economic mobility and workforce development programs.",
    facts: [
      "leads the firm's corporate responsibility and philanthropic strategy",
      "oversees billions in community development investment annually",
      "focuses on economic mobility and workforce development programs",
      "chairs the firm's Mid-Atlantic Regional operations"
    ]
  },

  {
    id: "mary-callahan-erdoes",
    name: "Mary Callahan Erdoes",
    title: "CEO, Asset & Wealth Management, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-merdoes.jpg",
    bio: "Mary Callahan Erdoes is CEO of Asset & Wealth Management at JPMorganChase and a member of the Operating Committee. She has led the division since 2009, overseeing trillions of dollars in client assets. She earned her Mathematics degree from Georgetown University and her MBA from Harvard Business School. She serves on the board of the Robin Hood Foundation and on the Global Advisory Council of Harvard University.",
    facts: [
      "has led Asset & Wealth Management since 2009",
      "earned her Mathematics degree from Georgetown University and her MBA from Harvard",
      "oversees trillions of dollars in client assets across the global wealth division",
      "serves on the board of the Robin Hood Foundation in New York City",
      "is consistently named among the most powerful women in global finance"
    ]
  },

  {
    id: "stacey-friedman",
    name: "Stacey Friedman",
    title: "General Counsel, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-sfriedman.jpg",
    bio: "Stacey Friedman is Executive Vice President and General Counsel for JPMorganChase and a member of the Operating Committee. She joined the firm in 2014 from Sullivan & Cromwell and leads all legal affairs and government relations worldwide.",
    facts: [
      "joined the firm in 2014 from Sullivan & Cromwell",
      "leads all legal affairs for the firm globally",
      "oversees legal strategy and government relations worldwide",
      "previously worked on some of the largest M&A transactions on Wall Street"
    ]
  },

  {
    id: "teresa-heitsenrether",
    name: "Teresa Heitsenrether",
    title: "Chief Data & Analytics Officer, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-heitsenrether.jpg",
    bio: "Teresa Heitsenrether is the Chief Data & Analytics Officer of JPMorganChase. She leads the firm's artificial intelligence and data analytics strategy across all lines of business. She has been with the firm for over two decades and previously held senior roles in the investment bank.",
    facts: [
      "leads the firm's AI and data analytics strategy firm-wide",
      "has been with the firm for over two decades",
      "previously held senior roles in the Corporate & Investment Bank",
      "oversees machine learning and data initiatives across the entire company"
    ]
  },

  {
    id: "marianne-lake",
    name: "Marianne Lake",
    title: "CEO, Consumer & Community Banking, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-marianne-lake.jpg",
    bio: "Marianne Lake is CEO of Consumer & Community Banking at JPMorganChase and a member of the Operating Committee. She has been with the firm for over 25 years. She served as the firm's CFO from 2013 to 2019 and holds a Bachelor of Science in Physics from the University of Reading, UK. She co-founded the Women on the Move initiative.",
    facts: [
      "has been with the firm for over 25 years",
      "previously served as the firm's Chief Financial Officer from 2013 to 2019",
      "holds a Bachelor of Science in Physics from the University of Reading, UK",
      "co-founded the Women on the Move initiative at the firm",
      "oversees more than 86 million consumers and 7 million small businesses"
    ]
  },

  {
    id: "robin-leopold",
    name: "Robin Leopold",
    title: "Head of Human Resources, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-rleopold.jpg",
    bio: "Robin Leopold is Executive Vice President and Head of Human Resources for JPMorganChase. She joined the firm in 2010 after over 20 years at Citi and its predecessors, starting at Shearson Lehman Hutton. She oversees HR for more than 300,000 employees worldwide and shapes the firm's global human capital strategy.",
    facts: [
      "joined the firm in 2010 after over 20 years at Citi and its predecessors",
      "oversees HR for more than 300,000 employees worldwide",
      "began her financial services career at Shearson Lehman Hutton",
      "leads talent acquisition and culture strategy globally across the firm"
    ]
  },

  {
    id: "douglas-petno",
    name: "Douglas B. Petno",
    title: "Co-CEO, Commercial & Investment Bank, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-dpetno.jpg",
    bio: "Douglas B. Petno is Co-CEO of the Commercial & Investment Bank at JPMorganChase and a member of the Operating Committee. He has been with the firm for over 25 years and previously led commercial banking for mid-sized companies before taking on his current role co-leading one of the largest investment banks in the world.",
    facts: [
      "has been with the firm for over 25 years",
      "co-leads one of the world's largest investment banking divisions",
      "previously ran commercial banking for mid-sized companies",
      "focuses on corporate and mid-market client relationships globally"
    ]
  },

  {
    id: "jennifer-piepszak",
    name: "Jennifer Piepszak",
    title: "Chief Operating Officer, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-jpiepszak.jpg",
    bio: "Jennifer Piepszak is Chief Operating Officer of JPMorganChase and a member of the Operating Committee. She joined the firm in 1994 and is a Colgate University graduate. She previously served as the firm's CFO and as co-CEO of Consumer & Community Banking before becoming COO.",
    facts: [
      "joined the firm in 1994 and is a Colgate University graduate",
      "previously served as Chief Financial Officer of the firm",
      "was previously co-CEO of Consumer & Community Banking",
      "became the firm's Chief Operating Officer overseeing all firm operations"
    ]
  },

  {
    id: "troy-rohrbaugh",
    name: "Troy Rohrbaugh",
    title: "Co-CEO, Commercial & Investment Bank, JPMorganChase",
    photo: "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/headshots/headshot-troy.jpg",
    bio: "Troy Rohrbaugh is Co-CEO of the Commercial & Investment Bank at JPMorganChase and a member of the Operating Committee. He has been with the firm for over 20 years and previously ran global markets and trading operations, overseeing some of the largest trading desks on Wall Street.",
    facts: [
      "has been with the firm for over 20 years",
      "previously ran global markets and trading operations",
      "co-leads one of the world's largest commercial and investment banking divisions",
      "oversees some of the largest trading operations on Wall Street"
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CHASE MANAGEMENT  (18 unique executives after deduplication)
  //  Source: media.chase.com/leadership
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "allison-beer",
    name: "Allison Beer",
    title: "CEO, Card Services & Connected Commerce, JPMorganChase",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/new-allison-beer-headshot.jpg",
    bio: "Allison Beer is the CEO of Card Services & Connected Commerce at JPMorganChase. She leads the firm's credit card franchise — the industry leader in sales with more than 59 million active accounts — and Chase's Connected Commerce business serving over 73 million digitally active customers. She is a Yale University graduate and joined the firm in 2017 from American Express.",
    facts: [
      "is a Yale University graduate",
      "leads a credit card franchise with more than 59 million active accounts",
      "was previously Chase's Chief Product Officer who led the bank's agile transformation",
      "is the 2025–26 chair of American Heart Association's Go Red for Women in New York City",
      "joined the firm in 2017 from American Express spanning digital and M&A roles"
    ]
  },

  {
    id: "ben-walter",
    name: "Ben Walter",
    title: "CEO, Chase Business Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/ben-walter.jpg",
    bio: "Ben Walter is the CEO of Chase Business Banking, a trusted financial partner to 7 million small businesses across the U.S. He joined Chase in 2021 from Hiscox specialty insurance, where he was Global Retail CEO and previously COO in the U.S. He holds an MBA from Northwestern University and a bachelor's degree from Washington University.",
    facts: [
      "joined Chase in 2021 from Hiscox specialty insurance",
      "previously served as Global Retail CEO at Hiscox",
      "holds an MBA from Northwestern University",
      "oversees banking relationships with 7 million small businesses across the U.S."
    ]
  },

  {
    id: "bori-cox",
    name: "Bori Cox",
    title: "Chief Financial Officer, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/banner-bori-cox.jpg",
    bio: "Bori Cox is the CFO of Consumer & Community Banking at JPMorganChase. She joined the firm in 2011 after roles at McKinsey, Citi and Morgan Stanley. She holds a master's degree from the London School of Economics and graduated from American University in Bulgaria. She sits on the Juilliard Council and is a member of the Aspen Institute's 2025 Class of Finance Leaders Fellows.",
    facts: [
      "joined the firm in 2011 after roles at McKinsey, Citi and Morgan Stanley",
      "holds a master's degree from the London School of Economics",
      "sits on the Juilliard Council supporting performing arts education in New York",
      "is a member of the Aspen Institute's 2025 Class of Finance Leaders Fellows"
    ]
  },

  {
    id: "carla-hassan",
    name: "Carla Hassan",
    title: "Chief Marketing Officer, JPMorganChase",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/carla-hassan-1600x600.jpg",
    bio: "Carla Hassan is the Chief Marketing Officer of JPMorganChase, leading a global marketing organization of 3,000 people. She was previously CMO at Citi, Global CMO at Toys R Us and spent 13 years in marketing leadership at PepsiCo. She holds an MBA from Thunderbird Graduate School of International Management and has been named one of Forbes' World's Most Influential CMOs in 2021, 2022 and 2023.",
    facts: [
      "leads a global marketing organization of 3,000 people across the firm",
      "was previously Chief Marketing Officer at Citi",
      "spent 13 years in marketing leadership roles at PepsiCo across 50+ markets",
      "was named one of Forbes' World's Most Influential CMOs in 2021, 2022 and 2023",
      "holds an MBA from the Thunderbird Graduate School of International Management"
    ]
  },

  {
    id: "danielle-bartolomei",
    name: "Danielle Bartolomei",
    title: "Chief Compliance Officer, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/danielle-bartolomei-thumbnail.jpg",
    bio: "Danielle Bartolomei is the Chief Compliance Officer for Consumer & Community Banking at JPMorganChase. She oversees compliance programs across all CCB lines of business, ensuring regulatory adherence across products serving more than 86 million consumers.",
    facts: [
      "serves as Chief Compliance Officer for Consumer & Community Banking",
      "oversees compliance programs across all CCB lines of business",
      "ensures regulatory adherence across products serving 86 million consumers",
      "leads compliance strategy across personal banking, credit cards, mortgages and auto financing"
    ]
  },

  {
    id: "gill-haus",
    name: "Gill Haus",
    title: "Chief Information Officer, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/gill-haus.jpg",
    bio: "Gill Haus is Chief Information Officer of Consumer & Community Banking at JPMorganChase. He oversees an annual technology budget of about $7 billion and manages over 12,000 technologists globally. He previously served as CTO of Enterprise Products and Platforms at Capital One and holds a BS from the University of Maryland.",
    facts: [
      "oversees an annual technology budget of approximately $7 billion",
      "manages over 12,000 technologists globally for Consumer & Community Banking",
      "previously served as Chief Technology Officer of Enterprise Products at Capital One",
      "holds a Bachelor of Science from the University of Maryland in Decision and Information Systems"
    ]
  },

  {
    id: "jennifer-roberts",
    name: "Jennifer Roberts",
    title: "CEO, Consumer Banking, Chase",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/jroberts-thumb.jpg",
    bio: "Jennifer Roberts is the CEO of Consumer Banking at Chase, serving more than 42 million customers through 4,900 branches and 16,000 ATMs. She has been with the firm since 1996. She previously led Business Banking and is the executive sponsor of Chase's Hispanic Leadership Forum. She serves on the board of public radio station WHYY in Philadelphia.",
    facts: [
      "has been with the firm since 1996",
      "previously led Business Banking and oversaw $32 billion in Paycheck Protection Program loans",
      "is the executive sponsor of Chase's Hispanic Leadership Forum",
      "serves on the board of public radio station WHYY in Philadelphia"
    ]
  },

  {
    id: "jon-shaw",
    name: "Jon Shaw",
    title: "Chief Auditor, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/jon-shaw-hero.jpg",
    bio: "Jon Shaw is the Chief Auditor for Consumer & Community Banking and a member of the Audit Operating Committee. He joined JPMorganChase in 2013 from PwC's Financial Management advisory practice, and previously served as Corporate Officer of Enterprise Risk Management at Hess Corporation. He holds an MBA in Finance from NYU Stern School of Business.",
    facts: [
      "joined the firm in 2013 from PwC's Financial Management advisory practice",
      "holds an MBA in Finance from NYU Stern School of Business",
      "previously served as Corporate Officer of Enterprise Risk Management at Hess Corporation",
      "has been Executive Sponsor of the Internal Audit LGBTQ+ Forum since 2022"
    ]
  },

  {
    id: "julie-bohan",
    name: "Julie Bohan",
    title: "Head of Human Resources, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/julie-bohan.jpg",
    bio: "Julie Bohan is the Head of Human Resources for Consumer & Community Banking at JPMorganChase. She began her career at the firm in 1989 and has held HR leadership roles across Asset & Wealth Management, the investment bank and Consumer Banking over 30+ years. She holds an MA in Industrial/Organizational Psychology from New York University.",
    facts: [
      "began her career at the firm in 1989 as an HR Associate",
      "has held HR leadership roles across multiple divisions over 30+ years",
      "previously served as Global Head of HR for the J.P. Morgan Private Bank",
      "holds an MA in Industrial/Organizational Psychology from New York University",
      "served on the National Security Agency Workforce Advisory Board from 2024 to 2025"
    ]
  },

  {
    id: "kristin-lemkau",
    name: "Kristin Lemkau",
    title: "CEO, J.P. Morgan Wealth Management",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/kl-chase-bio.jpg",
    bio: "Kristin Lemkau is CEO of J.P. Morgan Wealth Management at JPMorganChase. She grew the division from $500 billion to over $1 trillion in assets under supervision since taking the role in 2020. Before that she was CMO of JPMorganChase, overseeing a $5B+ marketing budget. She is a Vanderbilt University graduate and was inducted into Forbes' CMO Hall of Fame in 2022.",
    facts: [
      "grew J.P. Morgan Wealth Management from $500 billion to over $1 trillion in assets",
      "was previously Chief Marketing Officer of JPMorganChase with a $5B+ marketing budget",
      "is a graduate of Vanderbilt University",
      "was inducted into Forbes' CMO Hall of Fame in 2022",
      "co-founded the Gun Safety Alliance and serves on the Robin Hood Foundation board"
    ]
  },

  {
    id: "leslie-wims-morris",
    name: "Leslie Wims Morris",
    title: "CEO, Chase Auto",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/leslie-wims-morris-1600x600.png",
    bio: "Leslie Wims Morris is the CEO of Chase Auto. She was named to the role in December 2024. She holds an MBA from Harvard Business School and a BA in English from Yale University. She joined Chase in 2018 and built and scaled the white-labeled captive finance business with global auto manufacturers. She serves as Vice Chairman of the board of the Dance Theatre of Harlem.",
    facts: [
      "was named CEO of Chase Auto in December 2024",
      "holds an MBA from Harvard Business School and a BA in English from Yale University",
      "previously built and scaled Chase Auto's white-labeled captive finance business",
      "serves as Vice Chairman of the board of the Dance Theatre of Harlem",
      "has more than 25 years of experience spanning American Express, Broadridge and Jefferies"
    ]
  },

  {
    id: "mark-brucker",
    name: "Mark Brucker",
    title: "Chief Risk Officer, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/mark-brucker.JPG",
    bio: "Mark Brucker is the Chief Risk Officer for Consumer & Community Banking at JPMorganChase. He has over 30 years of risk and operations experience, previously serving as CRO for Card Services. Before joining Chase, he held risk leadership roles at Bank of America across small business, credit card, auto and mortgage. He holds a BA in Economics from Wake Forest University.",
    facts: [
      "has more than 30 years of risk and operations experience across consumer products",
      "previously served as Chief Risk Officer for Card Services before leading CCB",
      "holds a BA in Economics from Wake Forest University",
      "is a board member of ProSight Financial Association",
      "previously held risk leadership roles at Bank of America across multiple product lines"
    ]
  },

  {
    id: "matt-kane",
    name: "Matt Kane",
    title: "Head of Strategy & Business Development, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/matt-kane-thumbnail-new.jpg",
    bio: "Matt Kane is the Head of Strategy & Business Development for Consumer & Community Banking at JPMorganChase. He oversees the identification and execution of strategic priorities across CCB's lines of business and plays a key role in partnerships, acquisitions and investments.",
    facts: [
      "leads strategy and business development for Consumer & Community Banking",
      "oversees strategic priorities across all CCB lines of business",
      "plays a key role in CCB partnerships, acquisitions and investments",
      "works across deposits, lending, payments and digital to shape long-term direction"
    ]
  },

  {
    id: "mike-ashworth",
    name: "Mike Ashworth",
    title: "Chief Operations Officer, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/mike-ashworth-thumb.jpg",
    bio: "Mike Ashworth is the Chief Operations Officer for Consumer & Community Banking at JPMorganChase. He has been with the firm for more than 36 years and previously served as Chief Information Officer for CCB. He holds a degree in Economics with Computing from the University of Bath, UK.",
    facts: [
      "has been with the firm for more than 36 years",
      "previously served as Chief Information Officer for Consumer & Community Banking",
      "holds a degree in Economics with Computing from the University of Bath, UK",
      "has led CCB Operations since 2016 overseeing a global team supporting 85 million customers"
    ]
  },

  {
    id: "pablo-rodriguez",
    name: "Pablo Rodriguez",
    title: "Chief Communications Officer, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/pablo-hero.jpg",
    bio: "Pablo Rodriguez is the Chief Communications Officer for Consumer & Community Banking at JPMorganChase. He joined the firm in 2018 from PayPal, where he was Senior Director of Global Consumer Communications. He is a Texas A&M University graduate and was named to PRWeek's 40 Under 40 List in 2016.",
    facts: [
      "joined the firm in 2018 from PayPal as Senior Director of Global Consumer Communications",
      "is a graduate of Texas A&M University",
      "was named to PRWeek's 40 Under 40 List in 2016",
      "leads communications strategy across all eight CCB lines of business and nine functions"
    ]
  },

  {
    id: "pauline-saunders",
    name: "Pauline Saunders",
    title: "Chief Control Manager, Consumer & Community Banking",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/pauline_thumbnail.jpg",
    bio: "Pauline Saunders is the Chief Control Manager for Consumer & Community Banking at JPMorganChase. She oversees the control management framework across all CCB lines of business and is responsible for identifying, escalating and remediating operational and compliance risks.",
    facts: [
      "serves as Chief Control Manager for Consumer & Community Banking",
      "oversees the control management framework across all CCB lines of business",
      "is responsible for identifying and remediating operational and compliance risks",
      "plays a key oversight role across products serving more than 85 million customers"
    ]
  },

  {
    id: "peter-muriungi",
    name: "Peter Muriungi",
    title: "CEO, Connected Commerce, Chase",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/peter-thumbnail.png",
    bio: "Peter Muriungi is the CEO of Connected Commerce at JPMorganChase. He previously led Chase Auto for several years, overseeing a portfolio with over $88 billion in assets. He joined the firm in 2013 and is Executive Sponsor of The Fellowship Initiative in Dallas.",
    facts: [
      "joined the firm in 2013 and previously led Chase Auto",
      "oversees travel, dining, shopping and offers for over 70 million digital customers",
      "managed a mortgage portfolio of 7.3 million loans totaling $1 trillion in balance",
      "is Executive Sponsor of The Fellowship Initiative in Dallas supporting young men of color"
    ]
  },

  {
    id: "rohan-amin",
    name: "Rohan Amin",
    title: "Chief Product Officer, Chase",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/rohan-amin-thumb.jpg",
    bio: "Rohan Amin is the Chief Product Officer at Chase. He holds a doctorate in Engineering Management from George Washington University and joined the firm in 2014 from Lockheed Martin's Global Cybersecurity Solutions division. He sits on the Technical Advisory Board for Engineering at the University of Pennsylvania.",
    facts: [
      "holds a doctorate in Engineering Management from George Washington University",
      "came to the firm in 2014 from Lockheed Martin's Global Cybersecurity Solutions division",
      "sits on the Technical Advisory Board for Engineering at the University of Pennsylvania",
      "previously led the creation of Lockheed Martin's global computer network defense strategy"
    ]
  },

  {
    id: "sean-grzebin",
    name: "Sean Grzebin",
    title: "CEO, Chase Home Lending",
    photo: "https://media.chase.com/content/dam/chase/media-center/bios/grzebin-1600x600.png",
    bio: "Sean Grzebin is the CEO of Chase Home Lending. He became CEO in November 2024 and has served in the mortgage industry for more than 25 years at PHH Mortgage, Countrywide, Goldman Sachs (Avelo Mortgage) and Chase. He joined Chase in 2011 and earned a bachelor's degree in economics from Holy Family University.",
    facts: [
      "became CEO of Chase Home Lending in November 2024",
      "has served in the mortgage industry for more than 25 years",
      "joined Chase in 2011 after serving as COO at Avelo Mortgage, a Goldman Sachs subsidiary",
      "earned a bachelor's degree in economics from Holy Family University",
      "serves on the Mortgage Bankers Association Board of Directors"
    ]
  }

];
