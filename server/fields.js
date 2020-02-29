(function () {
    const modelFields = [
        {
            "fieldName": "NAME",
            "displayName": "NAME"
        },
        {
            "fieldName": "COUNTRY",
            "displayName": "Country"
        },
        {
            "fieldName": "Full name",
            "displayName": "Full name"
        },
        {
            "fieldName": "Born",
            "displayName": "Born"
        },
        {
            "fieldName": "Die",
            "displayName": "Die"
        },
        {
            "fieldName": "Current age",
            "displayName": "Current age"
        },
        {
            "fieldName": "Major teams",
            "displayName": "Major teams"
        },
        {
            "fieldName": "Education",
            "displayName": "Education"
        },
        {
            "fieldName": "Height",
            "displayName": "Height"
        },
        {
            "fieldName": "Nickname",
            "displayName": "Nickname"
        },
        {
            "fieldName": "Playing role",
            "displayName": "Playing role"
        },
        {
            "fieldName": "Batting style",
            "displayName": "Batting style"
        },
        {
            "fieldName": "Bowling style",
            "displayName": "Bowling style"
        },
        {
            "fieldName": "Other",
            "displayName": "Other"
        },
        {
            "fieldName": "Relation",
            "displayName": "Relation"
        },
        {
            "fieldName": "In a nutshell",
            "displayName": "In a nutshell"
        },
        {
            "fieldName": "DESCRIPTION",
            "displayName": "Description"
        },
        {
            "fieldName": "BATTING_Tests_Mat",
            "displayName": "BATTING Tests Mat"
        },
        {
            "fieldName": "BATTING_Tests_Inns",
            "displayName": "BATTING Tests Inns"
        },
        {
            "fieldName": "BATTING_Tests_NO",
            "displayName": "BATTING Tests NO"
        },
        {
            "fieldName": "BATTING_Tests_Runs",
            "displayName": "BATTING Tests Runs"
        },
        {
            "fieldName": "BATTING_Tests_HS",
            "displayName": "BATTING Tests HS"
        },
        {
            "fieldName": "BATTING_Tests_Ave",
            "displayName": "BATTING Tests Ave"
        },
        {
            "fieldName": "BATTING_Tests_BF",
            "displayName": "BATTING Tests BF"
        },
        {
            "fieldName": "BATTING_Tests_SR",
            "displayName": "BATTING Tests SR"
        },
        {
            "fieldName": "BATTING_Tests_100",
            "displayName": "BATTING Tests 100"
        },
        {
            "fieldName": "BATTING_Tests_50",
            "displayName": "BATTING Tests 50"
        },
        {
            "fieldName": "BATTING_Tests_4s",
            "displayName": "BATTING Tests 4s"
        },
        {
            "fieldName": "BATTING_Tests_6s",
            "displayName": "BATTING Tests 6s"
        },
        {
            "fieldName": "BATTING_Tests_Ct",
            "displayName": "BATTING Tests Ct"
        },
        {
            "fieldName": "BATTING_Tests_St",
            "displayName": "BATTING Tests St"
        },
        {
            "fieldName": "BATTING_ODIs_Mat",
            "displayName": "BATTING ODIs Mat"
        },
        {
            "fieldName": "BATTING_ODIs_Inns",
            "displayName": "BATTING ODIs Inns"
        },
        {
            "fieldName": "BATTING_ODIs_NO",
            "displayName": "BATTING ODIs NO"
        },
        {
            "fieldName": "BATTING_ODIs_Runs",
            "displayName": "BATTING ODIs Runs"
        },
        {
            "fieldName": "BATTING_ODIs_HS",
            "displayName": "BATTING ODIs HS"
        },
        {
            "fieldName": "BATTING_ODIs_Ave",
            "displayName": "BATTING ODIs Ave"
        },
        {
            "fieldName": "BATTING_ODIs_BF",
            "displayName": "BATTING ODIs BF"
        },
        {
            "fieldName": "BATTING_ODIs_SR",
            "displayName": "BATTING ODIs SR"
        },
        {
            "fieldName": "BATTING_ODIs_100",
            "displayName": "BATTING ODIs 100"
        },
        {
            "fieldName": "BATTING_ODIs_50",
            "displayName": "BATTING ODIs 50"
        },
        {
            "fieldName": "BATTING_ODIs_4s",
            "displayName": "BATTING ODIs 4s"
        },
        {
            "fieldName": "BATTING_ODIs_6s",
            "displayName": "BATTING ODIs 6s"
        },
        {
            "fieldName": "BATTING_ODIs_Ct",
            "displayName": "BATTING ODIs Ct"
        },
        {
            "fieldName": "BATTING_ODIs_St",
            "displayName": "BATTING ODIs St"
        },
        {
            "fieldName": "BATTING_T20Is_Mat",
            "displayName": "BATTING T20Is Mat"
        },
        {
            "fieldName": "BATTING_T20Is_Inns",
            "displayName": "BATTING T20Is Inns"
        },
        {
            "fieldName": "BATTING_T20Is_NO",
            "displayName": "BATTING T20Is NO"
        },
        {
            "fieldName": "BATTING_T20Is_Runs",
            "displayName": "BATTING T20Is Runs"
        },
        {
            "fieldName": "BATTING_T20Is_HS",
            "displayName": "BATTING T20Is HS"
        },
        {
            "fieldName": "BATTING_T20Is_Ave",
            "displayName": "BATTING T20Is Ave"
        },
        {
            "fieldName": "BATTING_T20Is_BF",
            "displayName": "BATTING T20Is BF"
        },
        {
            "fieldName": "BATTING_T20Is_SR",
            "displayName": "BATTING T20Is SR"
        },
        {
            "fieldName": "BATTING_T20Is_100",
            "displayName": "BATTING T20Is 100"
        },
        {
            "fieldName": "BATTING_T20Is_50",
            "displayName": "BATTING T20Is 50"
        },
        {
            "fieldName": "BATTING_T20Is_4s",
            "displayName": "BATTING T20Is 4s"
        },
        {
            "fieldName": "BATTING_T20Is_6s",
            "displayName": "BATTING T20Is 6s"
        },
        {
            "fieldName": "BATTING_T20Is_Ct",
            "displayName": "BATTING T20Is Ct"
        },
        {
            "fieldName": "BATTING_T20Is_St",
            "displayName": "BATTING T20Is St"
        },
        {
            "fieldName": "BATTING_First-class_Mat",
            "displayName": "BATTING First-class Mat"
        },
        {
            "fieldName": "BATTING_First-class_Inns",
            "displayName": "BATTING First-class Inns"
        },
        {
            "fieldName": "BATTING_First-class_NO",
            "displayName": "BATTING First-class NO"
        },
        {
            "fieldName": "BATTING_First-class_Runs",
            "displayName": "BATTING First-class Runs"
        },
        {
            "fieldName": "BATTING_First-class_HS",
            "displayName": "BATTING First-class HS"
        },
        {
            "fieldName": "BATTING_First-class_Ave",
            "displayName": "BATTING First-class Ave"
        },
        {
            "fieldName": "BATTING_First-class_BF",
            "displayName": "BATTING First-class BF"
        },
        {
            "fieldName": "BATTING_First-class_SR",
            "displayName": "BATTING First-class SR"
        },
        {
            "fieldName": "BATTING_First-class_100",
            "displayName": "BATTING First-class 100"
        },
        {
            "fieldName": "BATTING_First-class_50",
            "displayName": "BATTING First-class 50"
        },
        {
            "fieldName": "BATTING_First-class_4s",
            "displayName": "BATTING First-class 4s"
        },
        {
            "fieldName": "BATTING_First-class_6s",
            "displayName": "BATTING First-class 6s"
        },
        {
            "fieldName": "BATTING_First-class_Ct",
            "displayName": "BATTING First-class Ct"
        },
        {
            "fieldName": "BATTING_First-class_St",
            "displayName": "BATTING First-class St"
        },
        {
            "fieldName": "BATTING_List A_Mat",
            "displayName": "BATTING List A Mat"
        },
        {
            "fieldName": "BATTING_List A_Inns",
            "displayName": "BATTING List A Inns"
        },
        {
            "fieldName": "BATTING_List A_NO",
            "displayName": "BATTING List A NO"
        },
        {
            "fieldName": "BATTING_List A_Runs",
            "displayName": "BATTING List A Runs"
        },
        {
            "fieldName": "BATTING_List A_HS",
            "displayName": "BATTING List A HS"
        },
        {
            "fieldName": "BATTING_List A_Ave",
            "displayName": "BATTING List A Ave"
        },
        {
            "fieldName": "BATTING_List A_BF",
            "displayName": "BATTING List A BF"
        },
        {
            "fieldName": "BATTING_List A_SR",
            "displayName": "BATTING List A SR"
        },
        {
            "fieldName": "BATTING_List A_100",
            "displayName": "BATTING List A 100"
        },
        {
            "fieldName": "BATTING_List A_50",
            "displayName": "BATTING List A 50"
        },
        {
            "fieldName": "BATTING_List A_4s",
            "displayName": "BATTING List A 4s"
        },
        {
            "fieldName": "BATTING_List A_6s",
            "displayName": "BATTING List A 6s"
        },
        {
            "fieldName": "BATTING_List A_Ct",
            "displayName": "BATTING List A Ct"
        },
        {
            "fieldName": "BATTING_List A_St",
            "displayName": "BATTING List A St"
        },
        {
            "fieldName": "BATTING_T20s_Mat",
            "displayName": "BATTING T20s Mat"
        },
        {
            "fieldName": "BATTING_T20s_Inns",
            "displayName": "BATTING T20s Inns"
        },
        {
            "fieldName": "BATTING_T20s_NO",
            "displayName": "BATTING T20s NO"
        },
        {
            "fieldName": "BATTING_T20s_Runs",
            "displayName": "BATTING T20s Runs"
        },
        {
            "fieldName": "BATTING_T20s_HS",
            "displayName": "BATTING T20s HS"
        },
        {
            "fieldName": "BATTING_T20s_Ave",
            "displayName": "BATTING T20s Ave"
        },
        {
            "fieldName": "BATTING_T20s_BF",
            "displayName": "BATTING T20s BF"
        },
        {
            "fieldName": "BATTING_T20s_SR",
            "displayName": "BATTING T20s SR"
        },
        {
            "fieldName": "BATTING_T20s_100",
            "displayName": "BATTING T20s 100"
        },
        {
            "fieldName": "BATTING_T20s_50",
            "displayName": "BATTING T20s 50"
        },
        {
            "fieldName": "BATTING_T20s_4s",
            "displayName": "BATTING T20s 4s"
        },
        {
            "fieldName": "BATTING_T20s_6s",
            "displayName": "BATTING T20s 6s"
        },
        {
            "fieldName": "BATTING_T20s_Ct",
            "displayName": "BATTING T20s Ct"
        },
        {
            "fieldName": "BATTING_T20s_St",
            "displayName": "BATTING T20s St"
        },
        {
            "fieldName": "BOWLING_Tests_Mat",
            "displayName": "BOWLING Tests Mat"
        },
        {
            "fieldName": "BOWLING_Tests_Inns",
            "displayName": "BOWLING Tests Inns"
        },
        {
            "fieldName": "BOWLING_Tests_Balls",
            "displayName": "BOWLING Tests Balls"
        },
        {
            "fieldName": "BOWLING_Tests_Runs",
            "displayName": "BOWLING Tests Runs"
        },
        {
            "fieldName": "BOWLING_Tests_Wkts",
            "displayName": "BOWLING Tests Wickets"
        },
        {
            "fieldName": "BOWLING_Tests_BBI",
            "displayName": "BOWLING Tests BBI"
        },
        {
            "fieldName": "BOWLING_Tests_BBM",
            "displayName": "BOWLING Tests BBM"
        },
        {
            "fieldName": "BOWLING_Tests_Ave",
            "displayName": "BOWLING Tests Ave"
        },
        {
            "fieldName": "BOWLING_Tests_Econ",
            "displayName": "BOWLING Tests Econ"
        },
        {
            "fieldName": "BOWLING_Tests_SR",
            "displayName": "BOWLING Tests SR"
        },
        {
            "fieldName": "BOWLING_Tests_4w",
            "displayName": "BOWLING Tests 4w"
        },
        {
            "fieldName": "BOWLING_Tests_5w",
            "displayName": "BOWLING Tests 5w"
        },
        {
            "fieldName": "BOWLING_Tests_10",
            "displayName": "BOWLING Tests 10"
        },
        {
            "fieldName": "BOWLING_ODIs_Mat",
            "displayName": "BOWLING ODIs Mat"
        },
        {
            "fieldName": "BOWLING_ODIs_Inns",
            "displayName": "BOWLING ODIs Inns"
        },
        {
            "fieldName": "BOWLING_ODIs_Balls",
            "displayName": "BOWLING ODIs Balls"
        },
        {
            "fieldName": "BOWLING_ODIs_Runs",
            "displayName": "BOWLING ODIs Runs"
        },
        {
            "fieldName": "BOWLING_ODIs_Wkts",
            "displayName": "BOWLING ODIs Wickets"
        },
        {
            "fieldName": "BOWLING_ODIs_BBI",
            "displayName": "BOWLING ODIs BBI"
        },
        {
            "fieldName": "BOWLING_ODIs_BBM",
            "displayName": "BOWLING ODIs BBM"
        },
        {
            "fieldName": "BOWLING_ODIs_Ave",
            "displayName": "BOWLING ODIs Ave"
        },
        {
            "fieldName": "BOWLING_ODIs_Econ",
            "displayName": "BOWLING ODIs Econ"
        },
        {
            "fieldName": "BOWLING_ODIs_SR",
            "displayName": "BOWLING ODIs SR"
        },
        {
            "fieldName": "BOWLING_ODIs_4w",
            "displayName": "BOWLING ODIs 4w"
        },
        {
            "fieldName": "BOWLING_ODIs_5w",
            "displayName": "BOWLING ODIs 5w"
        },
        {
            "fieldName": "BOWLING_ODIs_10",
            "displayName": "BOWLING ODIs 10"
        },
        {
            "fieldName": "BOWLING_T20Is_Mat",
            "displayName": "BOWLING T20Is Mat"
        },
        {
            "fieldName": "BOWLING_T20Is_Inns",
            "displayName": "BOWLING T20Is Inns"
        },
        {
            "fieldName": "BOWLING_T20Is_Balls",
            "displayName": "BOWLING T20Is Balls"
        },
        {
            "fieldName": "BOWLING_T20Is_Runs",
            "displayName": "BOWLING T20Is Runs"
        },
        {
            "fieldName": "BOWLING_T20Is_Wkts",
            "displayName": "BOWLING T20Is Wickets"
        },
        {
            "fieldName": "BOWLING_T20Is_BBI",
            "displayName": "BOWLING T20Is BBI"
        },
        {
            "fieldName": "BOWLING_T20Is_BBM",
            "displayName": "BOWLING T20Is BBM"
        },
        {
            "fieldName": "BOWLING_T20Is_Ave",
            "displayName": "BOWLING T20Is Ave"
        },
        {
            "fieldName": "BOWLING_T20Is_Econ",
            "displayName": "BOWLING T20Is Econ"
        },
        {
            "fieldName": "BOWLING_T20Is_SR",
            "displayName": "BOWLING T20Is SR"
        },
        {
            "fieldName": "BOWLING_T20Is_4w",
            "displayName": "BOWLING T20Is 4w"
        },
        {
            "fieldName": "BOWLING_T20Is_5w",
            "displayName": "BOWLING T20Is 5w"
        },
        {
            "fieldName": "BOWLING_T20Is_10",
            "displayName": "BOWLING T20Is 10"
        },
        {
            "fieldName": "BOWLING_First-class_Mat",
            "displayName": "BOWLING First-class Mat"
        },
        {
            "fieldName": "BOWLING_First-class_Inns",
            "displayName": "BOWLING First-class Inns"
        },
        {
            "fieldName": "BOWLING_First-class_Balls",
            "displayName": "BOWLING First-class Balls"
        },
        {
            "fieldName": "BOWLING_First-class_Runs",
            "displayName": "BOWLING First-class Runs"
        },
        {
            "fieldName": "BOWLING_First-class_Wkts",
            "displayName": "BOWLING First-class Wkts"
        },
        {
            "fieldName": "BOWLING_First-class_BBI",
            "displayName": "BOWLING First-class BBI"
        },
        {
            "fieldName": "BOWLING_First-class_BBM",
            "displayName": "BOWLING First-class BBM"
        },
        {
            "fieldName": "BOWLING_First-class_Ave",
            "displayName": "BOWLING First-class Ave"
        },
        {
            "fieldName": "BOWLING_First-class_Econ",
            "displayName": "BOWLING First-class Econ"
        },
        {
            "fieldName": "BOWLING_First-class_SR",
            "displayName": "BOWLING First-class SR"
        },
        {
            "fieldName": "BOWLING_First-class_4w",
            "displayName": "BOWLING First-class 4w"
        },
        {
            "fieldName": "BOWLING_First-class_5w",
            "displayName": "BOWLING First-class 5w"
        },
        {
            "fieldName": "BOWLING_First-class_10",
            "displayName": "BOWLING First-class 10"
        },
        {
            "fieldName": "BOWLING_List A_Mat",
            "displayName": "BOWLING List A Mat"
        },
        {
            "fieldName": "BOWLING_List A_Inns",
            "displayName": "BOWLING List A Inns"
        },
        {
            "fieldName": "BOWLING_List A_Balls",
            "displayName": "BOWLING List A Balls"
        },
        {
            "fieldName": "BOWLING_List A_Runs",
            "displayName": "BOWLING List A Runs"
        },
        {
            "fieldName": "BOWLING_List A_Wkts",
            "displayName": "BOWLING List A Wkts"
        },
        {
            "fieldName": "BOWLING_List A_BBI",
            "displayName": "BOWLING List A BBI"
        },
        {
            "fieldName": "BOWLING_List A_BBM",
            "displayName": "BOWLING List A BBM"
        },
        {
            "fieldName": "BOWLING_List A_Ave",
            "displayName": "BOWLING List A Ave"
        },
        {
            "fieldName": "BOWLING_List A_Econ",
            "displayName": "BOWLING List A Econ"
        },
        {
            "fieldName": "BOWLING_List A_SR",
            "displayName": "BOWLING List A SR"
        },
        {
            "fieldName": "BOWLING_List A_4w",
            "displayName": "BOWLING List A 4w"
        },
        {
            "fieldName": "BOWLING_List A_5w",
            "displayName": "BOWLING List A 5w"
        },
        {
            "fieldName": "BOWLING_List A_10",
            "displayName": "BOWLING List A 10"
        },
        {
            "fieldName": "BOWLING_T20s_Mat",
            "displayName": "BOWLING T20s Mat"
        },
        {
            "fieldName": "BOWLING_T20s_Inns",
            "displayName": "BOWLING T20s Inns"
        },
        {
            "fieldName": "BOWLING_T20s_Balls",
            "displayName": "BOWLING T20s Balls"
        },
        {
            "fieldName": "BOWLING_T20s_Runs",
            "displayName": "BOWLING T20s Runs"
        },
        {
            "fieldName": "BOWLING_T20s_Wkts",
            "displayName": "BOWLING T20s Wkts"
        },
        {
            "fieldName": "BOWLING_T20s_BBI",
            "displayName": "BOWLING T20s BBI"
        },
        {
            "fieldName": "BOWLING_T20s_BBM",
            "displayName": "BOWLING T20s BBM"
        },
        {
            "fieldName": "BOWLING_T20s_Ave",
            "displayName": "BOWLING T20s Ave"
        },
        {
            "fieldName": "BOWLING_T20s_Econ",
            "displayName": "BOWLING T20s Econ"
        },
        {
            "fieldName": "BOWLING_T20s_SR",
            "displayName": "BOWLING T20s SR"
        },
        {
            "fieldName": "BOWLING_T20s_4w",
            "displayName": "BOWLING T20s 4w"
        },
        {
            "fieldName": "BOWLING_T20s_5w",
            "displayName": "BOWLING T20s 5w"
        },
        {
            "fieldName": "BOWLING_T20s_10",
            "displayName": "BOWLING T20s 10"
        }
    ];
    module.exports = {
        modelFields
    }
}())