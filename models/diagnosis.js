const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diagnosis', {
    facilityId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vital_weight: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    vital_height: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    headcircumference: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    muac: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tempreture: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pulse: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bloodpressure: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    respiratory: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nutrition: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    immunization: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    development: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pbnh: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    generalexamination: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    cvs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cns: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mss: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    abdomen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    problem1: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    problem2: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    problem3: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    problem4: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    problem5: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    provisionalDiagnosis1: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    provisionalDiagnosis2: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    provisionalDiagnosis3: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    provisionalDiagnosis4: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    provisionalDiagnosis5: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    addedcare: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    partToDress: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    dresswith: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    seen_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    patient_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appointment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    pastSurgicalHistory: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    social: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    otherSocialHistory: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    obtsGyneaHistory: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    pasttMedicalHistory: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    allergy: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    otherAllergies: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    drugHistory: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    otherSysExamination: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    respiratoryRate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    athropometry_height: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    presenting_complaints: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    athropometry_weight: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BMR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    BVR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LLL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    RLL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LUL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    RUL: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    management_plan: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    asthmatic: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dehydration: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    diabetic: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    diabeticRegularOnMedication: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hypertensive: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hypertensiveDuration: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eye_opening: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    others: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    palor: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pastMedicalHistory: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    observation_request: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    hypertensiveRegularOnMedication: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    optimalSugarControl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drugAllergy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dressing_request: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nursing_request: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nursing_request_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'diagnosis',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
