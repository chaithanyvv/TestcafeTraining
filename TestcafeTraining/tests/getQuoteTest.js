import { Selector } from 'testcafe';
import YourDetailsPage from '../pageobjects/pages/YourDetailsPage';
import YourQuotePage from '../pageobjects/pages/YourQuotePage';

const yourDetails=new YourDetailsPage()
const yourQuote=new YourQuotePage()

fixture("Test the getQuote for Home")

    .page("https://customer.axa.co.uk/home/get-quote");
    test('fill details',async t =>{
       // if (await t.expect(yourDetails.acceptCookies.exists).ok()){
        await t.click(yourDetails.acceptCookies)
        await t.typeText(yourDetails.houseNum,'1 Barley House',{paste:true ,replace:true})
        await t.typeText(yourDetails.postcode,'KT11 1HY')
        await t.click(yourDetails.findAdress)
        await t.click(yourDetails.homeOwner)
        await t.click(yourDetails.coverName)
        await t.click(yourDetails.propertyType).click(yourDetails.propertyTypeOption.withText('Detached house'))
        await t.click(yourDetails.noOfBedroom)
        await t.click(yourDetails.noOfBathroom)
        await t.click(yourDetails.noOfOtherroom)
        await t.click(yourDetails.buildDate).click(yourDetails.buildDateOption.withText('2010 or later'))
        await t.click(yourDetails.buildyear).click(yourDetails.buildyearOption.withText('2019'))
        await t.click(yourDetails.wallMaterial).click(yourDetails.wallMaterialOption.withText('Brick'))
        await t.click(yourDetails.roofMaterial).click(yourDetails.roofMaterialOption.withText('Tile'))
        await t.click(yourDetails.roofFlat).click(yourDetails.roofFlatOption.withText('None'))
        await t.click(yourDetails.hasFlooded)
        await t.click(yourDetails.hadLandslip)
        await t.click(yourDetails.listedBuilding)
        await t.click(yourDetails.noOfadult)
        await t.click(yourDetails.noOfchildren)
        await t.click(yourDetails.whenHomeUsed).click(yourDetails.whenHomeUsedOption.withText('Most days for at least a few hours'))
        await t.click(yourDetails.businessUse).click(yourDetails.businessUseOption.withText('No business use'))
        await t.click(yourDetails.hasSpecifiedItems)
        await t.click(yourDetails.hasPossessionCovered)
        await t.click(yourDetails.hasBicycle)
        await t.click(yourDetails.hasInsurance)
        await t.click(yourDetails.buildingInsurance).click(yourDetails.buildingInsuranceOption.withText('10 years'))
        await t.click(yourDetails.contentInsurance).click(yourDetails.contentInsuranceOption.withText('10 years'))
        await t.click(yourDetails.title)
        await t.typeText(yourDetails.firstName,'Joe',{paste:true ,replace:true})
        await t.typeText(yourDetails.surName,'Black',{paste:true ,replace:true})
        await t.typeText(yourDetails.birthDay,'10',{paste:true ,replace:true})
        .typeText(yourDetails.birthMonth,'10')
        .typeText(yourDetails.birthYear,'1980')
        await t.click(yourDetails.empStatus).click(yourDetails.empStatusOption.withText('Employed full time'))
        await t.typeText(yourDetails.autoOccupation,'Insur',{speed: 0.2}).wait(2000).pressKey('Enter')
        await t.typeText(yourDetails.autobusiness,'Insur',{speed: 0.2}).wait(2000).pressKey('Enter')
        await t.click(yourDetails.isAddJointPolicyHolder)
        await t.click(yourDetails.isAddInterestedParty)
        await t.click(yourDetails.installment)
        await t.typeText(yourDetails.email,'joeblack@gmail.com',{paste:true ,replace:true})
        await t.takeScreenshot()
        await t.click(yourDetails.submitBtn).takeScreenshot()

        await t.expect(yourQuote.resultTitle.exists).ok()







    }
    )