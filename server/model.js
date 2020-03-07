(async function () {
    const {Schema, model} = require('mongoose');
    const playerSchema = new Schema({
        "ID": {
            type: Number
        },
        "NAME": {
            type: String
        },
        "COUNTRY": {
            type: String
        },
        "Full name": {
            type: String
        },
        "Born": {
            type: String
        },
        "Died": {
            type: String
        },
        "Major teams": {
            type: String
        },
        "Education": {
            type: String
        },
        "Height": {
            type: String
        },
        "Nickname": {
            type: String
        },
        "Playing role": {
            type: String
        },
        "Batting style": {
            type: String
        },
        "Bowling style": {
            type: String
        },
        "Other": {
            type: String
        },
        "Relation": {
            type: String
        },
        "In a nutshell": {
            type: String
        },
        "DESCRIPTION": {
            type: String
        },
        "AWARDS": {
            type: String
        },
        "BATTING_Tests_Mat": {
            type: Number
        },
        "BATTING_Tests_Inns": {
            type: Number
        },
        "BATTING_Tests_NO": {
            type: Number
        },
        "BATTING_Tests_Runs": {
            type: Number
        },
        "BATTING_Tests_HS": {
            type: Number
        },
        "BATTING_Tests_Ave": {
            type: Number
        },
        "BATTING_Tests_BF": {
            type: Number
        },
        "BATTING_Tests_SR": {
            type: Number
        },
        "BATTING_Tests_100": {
            type: Number
        },
        "BATTING_Tests_50": {
            type: Number
        },
        "BATTING_Tests_4s": {
            type: Number
        },
        "BATTING_Tests_6s": {
            type: Number
        },
        "BATTING_Tests_Ct": {
            type: Number
        },
        "BATTING_Tests_St": {
            type: Number
        },
        "BATTING_ODIs_Mat": {
            type: Number
        },
        "BATTING_ODIs_Inns": {
            type: Number
        },
        "BATTING_ODIs_NO": {
            type: Number
        },
        "BATTING_ODIs_Runs": {
            type: Number
        },
        "BATTING_ODIs_HS": {
            type: Number
        },
        "BATTING_ODIs_Ave": {
            type: Number
        },
        "BATTING_ODIs_BF": {
            type: Number
        },
        "BATTING_ODIs_SR": {
            type: Number
        },
        "BATTING_ODIs_100": {
            type: Number
        },
        "BATTING_ODIs_50": {
            type: Number
        },
        "BATTING_ODIs_4s": {
            type: Number
        },
        "BATTING_ODIs_6s": {
            type: Number
        },
        "BATTING_ODIs_Ct": {
            type: Number
        },
        "BATTING_ODIs_St": {
            type: Number
        },
        "BATTING_T20Is_Mat": {
            type: Number
        },
        "BATTING_T20Is_Inns": {
            type: Number
        },
        "BATTING_T20Is_NO": {
            type: Number
        },
        "BATTING_T20Is_Runs": {
            type: Number
        },
        "BATTING_T20Is_HS": {
            type: Number
        },
        "BATTING_T20Is_Ave": {
            type: Number
        },
        "BATTING_T20Is_BF": {
            type: Number
        },
        "BATTING_T20Is_SR": {
            type: Number
        },
        "BATTING_T20Is_100": {
            type: Number
        },
        "BATTING_T20Is_50": {
            type: Number
        },
        "BATTING_T20Is_4s": {
            type: Number
        },
        "BATTING_T20Is_6s": {
            type: Number
        },
        "BATTING_T20Is_Ct": {
            type: Number
        },
        "BATTING_T20Is_St": {
            type: Number
        },
        "BATTING_First-class_Mat": {
            type: Number
        },
        "BATTING_First-class_Inns": {
            type: Number
        },
        "BATTING_First-class_NO": {
            type: Number
        },
        "BATTING_First-class_Runs": {
            type: Number
        },
        "BATTING_First-class_HS": {
            type: Number
        },
        "BATTING_First-class_Ave": {
            type: Number
        },
        "BATTING_First-class_BF": {
            type: Number
        },
        "BATTING_First-class_SR": {
            type: Number
        },
        "BATTING_First-class_100": {
            type: Number
        },
        "BATTING_First-class_50": {
            type: Number
        },
        "BATTING_First-class_4s": {
            type: Number
        },
        "BATTING_First-class_6s": {
            type: Number
        },
        "BATTING_First-class_Ct": {
            type: Number
        },
        "BATTING_First-class_St": {
            type: Number
        },
        "BATTING_List A_Mat": {
            type: Number
        },
        "BATTING_List A_Inns": {
            type: Number
        },
        "BATTING_List A_NO": {
            type: Number
        },
        "BATTING_List A_Runs": {
            type: Number
        },
        "BATTING_List A_HS": {
            type: Number
        },
        "BATTING_List A_Ave": {
            type: Number
        },
        "BATTING_List A_BF": {
            type: Number
        },
        "BATTING_List A_SR": {
            type: Number
        },
        "BATTING_List A_100": {
            type: Number
        },
        "BATTING_List A_50": {
            type: Number
        },
        "BATTING_List A_4s": {
            type: Number
        },
        "BATTING_List A_6s": {
            type: Number
        },
        "BATTING_List A_Ct": {
            type: Number
        },
        "BATTING_List A_St": {
            type: Number
        },
        "BATTING_T20s_Mat": {
            type: Number
        },
        "BATTING_T20s_Inns": {
            type: Number
        },
        "BATTING_T20s_NO": {
            type: Number
        },
        "BATTING_T20s_Runs": {
            type: Number
        },
        "BATTING_T20s_HS": {
            type: Number
        },
        "BATTING_T20s_Ave": {
            type: Number
        },
        "BATTING_T20s_BF": {
            type: Number
        },
        "BATTING_T20s_SR": {
            type: Number
        },
        "BATTING_T20s_100": {
            type: Number
        },
        "BATTING_T20s_50": {
            type: Number
        },
        "BATTING_T20s_4s": {
            type: Number
        },
        "BATTING_T20s_6s": {
            type: Number
        },
        "BATTING_T20s_Ct": {
            type: Number
        },
        "BATTING_T20s_St": {
            type: Number
        },
        "BOWLING_Tests_Mat": {
            type: Number
        },
        "BOWLING_Tests_Inns": {
            type: Number
        },
        "BOWLING_Tests_Balls": {
            type: Number
        },
        "BOWLING_Tests_Runs": {
            type: Number
        },
        "BOWLING_Tests_Wkts": {
            type: Number
        },
        "BOWLING_Tests_BBI": {
            type: Number
        },
        "BOWLING_Tests_BBM": {
            type: Number
        },
        "BOWLING_Tests_Ave": {
            type: Number
        },
        "BOWLING_Tests_Econ": {
            type: Number
        },
        "BOWLING_Tests_SR": {
            type: Number
        },
        "BOWLING_Tests_4w": {
            type: Number
        },
        "BOWLING_Tests_5w": {
            type: Number
        },
        "BOWLING_Tests_10": {
            type: Number
        },
        "BOWLING_ODIs_Mat": {
            type: Number
        },
        "BOWLING_ODIs_Inns": {
            type: Number
        },
        "BOWLING_ODIs_Balls": {
            type: Number
        },
        "BOWLING_ODIs_Runs": {
            type: Number
        },
        "BOWLING_ODIs_Wkts": {
            type: Number
        },
        "BOWLING_ODIs_BBI": {
            type: Number
        },
        "BOWLING_ODIs_BBM": {
            type: Number
        },
        "BOWLING_ODIs_Ave": {
            type: Number
        },
        "BOWLING_ODIs_Econ": {
            type: Number
        },
        "BOWLING_ODIs_SR": {
            type: Number
        },
        "BOWLING_ODIs_4w": {
            type: Number
        },
        "BOWLING_ODIs_5w": {
            type: Number
        },
        "BOWLING_ODIs_10": {
            type: Number
        },
        "BOWLING_T20Is_Mat": {
            type: Number
        },
        "BOWLING_T20Is_Inns": {
            type: Number
        },
        "BOWLING_T20Is_Balls": {
            type: Number
        },
        "BOWLING_T20Is_Runs": {
            type: Number
        },
        "BOWLING_T20Is_Wkts": {
            type: Number
        },
        "BOWLING_T20Is_BBI": {
            type: Number
        },
        "BOWLING_T20Is_BBM": {
            type: Number
        },
        "BOWLING_T20Is_Ave": {
            type: Number
        },
        "BOWLING_T20Is_Econ": {
            type: Number
        },
        "BOWLING_T20Is_SR": {
            type: Number
        },
        "BOWLING_T20Is_4w": {
            type: Number
        },
        "BOWLING_T20Is_5w": {
            type: Number
        },
        "BOWLING_T20Is_10": {
            type: Number
        },
        "BOWLING_First-class_Mat": {
            type: Number
        },
        "BOWLING_First-class_Inns": {
            type: Number
        },
        "BOWLING_First-class_Balls": {
            type: Number
        },
        "BOWLING_First-class_Runs": {
            type: Number
        },
        "BOWLING_First-class_Wkts": {
            type: Number
        },
        "BOWLING_First-class_BBI": {
            type: Number
        },
        "BOWLING_First-class_BBM": {
            type: Number
        },
        "BOWLING_First-class_Ave": {
            type: Number
        },
        "BOWLING_First-class_Econ": {
            type: Number
        },
        "BOWLING_First-class_SR": {
            type: Number
        },
        "BOWLING_First-class_4w": {
            type: Number
        },
        "BOWLING_First-class_5w": {
            type: Number
        },
        "BOWLING_First-class_10": {
            type: Number
        },
        "BOWLING_List A_Mat": {
            type: Number
        },
        "BOWLING_List A_Inns": {
            type: Number
        },
        "BOWLING_List A_Balls": {
            type: Number
        },
        "BOWLING_List A_Runs": {
            type: Number
        },
        "BOWLING_List A_Wkts": {
            type: Number
        },
        "BOWLING_List A_BBI": {
            type: Number
        },
        "BOWLING_List A_BBM": {
            type: Number
        },
        "BOWLING_List A_Ave": {
            type: Number
        },
        "BOWLING_List A_Econ": {
            type: Number
        },
        "BOWLING_List A_SR": {
            type: Number
        },
        "BOWLING_List A_4w": {
            type: Number
        },
        "BOWLING_List A_5w": {
            type: Number
        },
        "BOWLING_List A_10": {
            type: Number
        },
        "BOWLING_T20s_Mat": {
            type: Number
        },
        "BOWLING_T20s_Inns": {
            type: Number
        },
        "BOWLING_T20s_Balls": {
            type: Number
        },
        "BOWLING_T20s_Runs": {
            type: Number
        },
        "BOWLING_T20s_Wkts": {
            type: Number
        },
        "BOWLING_T20s_BBI": {
            type: Number
        },
        "BOWLING_T20s_BBM": {
            type: Number
        },
        "BOWLING_T20s_Ave": {
            type: Number
        },
        "BOWLING_T20s_Econ": {
            type: Number
        },
        "BOWLING_T20s_SR": {
            type: Number
        },
        "BOWLING_T20s_4w": {
            type: Number
        },
        "BOWLING_T20s_5w": {
            type: Number
        },
        "BOWLING_T20s_10": {
            type: Number
        },
    });
    module.exports = model('players', playerSchema);
}())