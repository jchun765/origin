// Script to create campaigns in production.
const db = require('../models')
const enums = require('../enums')
const { tokenToNaturalUnits } = require('../../src/util/token')

const aprilConfig = require('../../campaigns/april')
const mayConfig = require('../../campaigns/may')
const juneConfig = require('../../campaigns/june')
const julyConfig = require('../../campaigns/july')
const augustConfig = require('../../campaigns/august')
const septemberConfig = require('../../campaigns/september')
const octoberConfig = require('../../campaigns/october')
const novemberConfig = require('../../campaigns/november')
const decemberConfig = require('../../campaigns/december')
const jan2020Config = require('../../campaigns/jan2020')
const feb2020Config = require('../../campaigns/feb2020')
const mar2020Config = require('../../campaigns/mar2020')
const apr2020Config = require('../../campaigns/apr2020')

async function createAprilProdCampaign() {
  console.log('Creating April campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.apr2019.name',
    shortNameKey: 'growth.apr2019.short_name',
    rules: JSON.stringify(aprilConfig),
    startDate: Date.parse('March 18, 2019, 00:00 UTC'),
    endDate: Date.parse('May 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('May 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function createMayProdCampaign() {
  console.log('Creating May campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.may2019.name',
    shortNameKey: 'growth.may2019.short_name',
    rules: JSON.stringify(mayConfig),
    startDate: Date.parse('May 1, 2019, 00:00 UTC'),
    endDate: Date.parse('June 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('June 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateMayProdRules() {
  console.log('Updating May campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.may2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(mayConfig) })
}

async function createJuneProdCampaign() {
  console.log('Creating June campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.june2019.name',
    shortNameKey: 'growth.june2019.short_name',
    rules: JSON.stringify(juneConfig),
    startDate: Date.parse('June 1, 2019, 00:00 UTC'),
    endDate: Date.parse('July 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('July 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateJuneProdRules() {
  console.log('Updating June campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.june2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(juneConfig) })
}

async function createJulyProdCampaign() {
  console.log('Creating July campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.july2019.name',
    shortNameKey: 'growth.july2019.short_name',
    rules: JSON.stringify(julyConfig),
    startDate: Date.parse('July 1, 2019, 00:00 UTC'),
    endDate: Date.parse('August 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('August 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateJulyProdRules() {
  console.log('Updating July campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.july2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(julyConfig) })
}

async function createAugProdCampaign() {
  console.log('Creating August campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.aug2019.name',
    shortNameKey: 'growth.aug2019.short_name',
    rules: JSON.stringify(augustConfig),
    startDate: Date.parse('August 1, 2019, 00:00 UTC'),
    endDate: Date.parse('September 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('September 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateAugProdRules() {
  console.log('Updating June campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.aug2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(augustConfig) })
}

async function createSepProdCampaign() {
  console.log('Creating September campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.sep2019.name',
    shortNameKey: 'growth.sep.short_name',
    rules: JSON.stringify(septemberConfig),
    startDate: Date.parse('September 1, 2019, 00:00 UTC'),
    endDate: Date.parse('October 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('October 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateSepProdRules() {
  console.log('Updating September campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.sep2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(septemberConfig) })
}

async function createOctoberProdCampaign() {
  console.log('Creating October campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.oct2019.name',
    shortNameKey: 'growth.oct.short_name',
    rules: JSON.stringify(octoberConfig),
    startDate: Date.parse('October 1, 2019, 00:00 UTC'),
    endDate: Date.parse('November 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('November 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateOctoberProdRules() {
  console.log('Updating October campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.oct2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(octoberConfig) })
}

async function createNovemberProdCampaign() {
  console.log('Creating November campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.nov2019.name',
    shortNameKey: 'growth.nov2019.short_name',
    rules: JSON.stringify(novemberConfig),
    startDate: Date.parse('November 1, 2019, 00:00 UTC'),
    endDate: Date.parse('December 1, 2019, 00:00 UTC'),
    distributionDate: Date.parse('December 1, 2019, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateNovemberProdRules() {
  console.log('Updating November campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.nov2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(novemberConfig) })
}

async function createDecemberProdCampaign() {
  console.log('Creating December campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.dec2019.name',
    shortNameKey: 'growth.dec2019.short_name',
    rules: JSON.stringify(decemberConfig),
    startDate: Date.parse('December 1, 2019, 00:00 UTC'),
    endDate: Date.parse('January 1, 2020, 00:00 UTC'),
    distributionDate: Date.parse('January 1, 2020, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateDecemberProdRules() {
  console.log('Updating December campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.dec2019.name' }
  })
  await campaign.update({ rules: JSON.stringify(decemberConfig) })
}

async function createJan2020ProdCampaign() {
  console.log('Creating Jan 2020 campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.jan2020.name',
    shortNameKey: 'growth.jan2020.short_name',
    rules: JSON.stringify(jan2020Config),
    startDate: Date.parse('December 23, 2019, 18:00 UTC'),
    endDate: Date.parse('February 1, 2020, 00:00 UTC'),
    distributionDate: Date.parse('February 1, 2020, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateJan2020ProdRules() {
  console.log('Updating Jan 2020 campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.jan2020.name' }
  })
  await campaign.update({ rules: JSON.stringify(jan2020Config) })
}

async function createFeb2020ProdCampaign() {
  console.log('Creating Feb 2020 campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.feb2020.name',
    shortNameKey: 'growth.feb2020.short_name',
    rules: JSON.stringify(feb2020Config),
    startDate: Date.parse('February 1, 2020, 00:00 UTC'),
    endDate: Date.parse('March 1, 2020, 00:00 UTC'),
    distributionDate: Date.parse('March 1, 2020, 00:00 UTC'),
    cap: tokenToNaturalUnits(1000000), // Set cap to 1M tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateFeb2020ProdRules() {
  console.log('Updating Feb 2020 campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.feb2020.name' }
  })
  await campaign.update({ rules: JSON.stringify(feb2020Config) })
}

async function createMar2020ProdCampaign() {
  console.log('Creating Mar 2020 campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.mar2020.name',
    shortNameKey: 'growth.mar2020.short_name',
    rules: JSON.stringify(mar2020Config),
    startDate: Date.parse('February 28, 2020, 21:00 UTC'), // Fri Feb 28 2020 1pm PST
    endDate: Date.parse('April 1, 2020, 00:00 UTC'),
    distributionDate: Date.parse('April 1, 2020, 00:00 UTC'),
    cap: tokenToNaturalUnits(150000), // Set cap to 150k tokens
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateMar2020ProdRules() {
  console.log('Updating Mar 2020 campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.mar2020.name' }
  })
  await campaign.update({ rules: JSON.stringify(mar2020Config) })
}

async function createApr2020ProdCampaign() {
  console.log('Creating Apr 2020 campaign data in prod...')

  /* IMPORTANT when adding new translatable fields update the enums document:
   * origin-dapp/src/constants/Growth$FbtEnum.js
   */
  await db.GrowthCampaign.create({
    nameKey: 'growth.apr2020.name',
    shortNameKey: 'growth.apr2020.short_name',
    rules: JSON.stringify(apr2020Config),
    startDate: Date.parse('April 3, 2020, 17:00 UTC'),
    endDate: Date.parse('May 1, 2020, 00:00 UTC'),
    distributionDate: Date.parse('May 1, 2020, 00:00 UTC'),
    cap: tokenToNaturalUnits(0), // Set cap to 0 token
    capUsed: 0,
    currency: 'OGN',
    rewardStatus: enums.GrowthCampaignRewardStatuses.NotReady
  })
}

async function updateApr2020ProdRules() {
  console.log('Updating Apr 2020 campaign rules in prod...')

  const campaign = await db.GrowthCampaign.findOne({
    where: { nameKey: 'growth.apr2020.name' }
  })
  await campaign.update({ rules: JSON.stringify(apr2020Config) })
}

const args = {}
process.argv.forEach(arg => {
  const t = arg.split('=')
  const argVal = t.length > 1 ? t[1] : true
  args[t[0]] = argVal
})

const createByMonth = {
  april: createAprilProdCampaign,
  may: createMayProdCampaign,
  june: createJuneProdCampaign,
  july: createJulyProdCampaign,
  august: createAugProdCampaign,
  september: createSepProdCampaign,
  october: createOctoberProdCampaign,
  november: createNovemberProdCampaign,
  december: createDecemberProdCampaign,
  jan2020: createJan2020ProdCampaign,
  feb2020: createFeb2020ProdCampaign,
  mar2020: createMar2020ProdCampaign,
  apr2020: createApr2020ProdCampaign
}

const updateByMonth = {
  may: updateMayProdRules,
  june: updateJuneProdRules,
  july: updateJulyProdRules,
  august: updateAugProdRules,
  september: updateSepProdRules,
  october: updateOctoberProdRules,
  november: updateNovemberProdRules,
  december: updateDecemberProdRules,
  jan2020: updateJan2020ProdRules,
  feb2020: updateFeb2020ProdRules,
  mar2020: updateMar2020ProdRules,
  apr2020: updateApr2020ProdRules
}

const action = args['--action']
if (!action) {
  console.error('Missing --action argument')
  process.exit()
}

const month = args['--month']
if (!month) {
  console.error('Missing --month argument')
  process.exit()
}

let fn
if (action === 'create') {
  fn = createByMonth[month]
} else if (action === 'update') {
  fn = updateByMonth[month]
} else {
  console.error(`Unexpected action ${action}`)
  process.exit()
}

if (!fn) {
  console.error(`No create function for month of ${month}`)
  process.exit()
}

fn().then(() => {
  console.log('Done')
  process.exit()
})
