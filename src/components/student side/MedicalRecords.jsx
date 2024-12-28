/****** react library ******/
import { Link } from "react-router-dom"
import { useState } from "react";
/****** Icons ******/
import { FaArrowLeftLong } from "react-icons/fa6";
/****** components ******/
import Modal4 from "../common/Modal4";
import useModalhooks from "../../hooks/Modalhooks";
/****** database ******/
import { db } from "../../firebase-config"
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'

const MedicalRecords = () => {
//Hooks
  const [surname, setSurname] = useState("")
  const [given_name, setGiven_name] = useState("")
  const [middle_name, setMiddle_name] = useState("")
  const [age, setAge] = useState(0)
  const [sex, setSex] = useState("")
  const [status,setStatus] = useState("")
  const [birth,setBirth] = useState("")
  const [course, setCourse] = useState("")
  const [school_year,setSchool_year] = useState("")
  const [address,setAddress] = useState("")
  const [contact,setContact] = useState(0)
  const [mother_name,setMother_name] = useState("")
  const [father_name,setFather_name] = useState("")
  const [guardian_name,setGuardian_name] = useState("")
  const [emergency_contact,setEmergency_contact] = useState(0)
  const [relationship,setRelationship] = useState("")
  const [guardian_contact,setGuardian_contact] = useState(0)
  const [known_illness,setKnown_illness] = useState("")
  const [past_confinement,setPast_confinement] = useState("")
  const [known_allergies,setKnown_allergies] = useState("")
  const [past_immunization,setPast_immunization] = useState("")
  const [present_immunization,setPresent_immunization] = useState("")
  const [current_medicine,setCurrent_medicine] = useState("")
  const [dental_problem,setDental_problem] = useState("")
  const [primary_physician,setPrimary_physician] = useState("")
  const [allergy,setAllergy] = useState("")
  const [asthma,setAsthma] = useState("")
  const [tuberculosis,setTuberculosis] = useState("")
  const [hypertension,setHypertension] = useState("")
  const [heart_disease,setHeart_disease] = useState("")
  const [stroke,setStroke] = useState("")
  const [diabetes,setDiabetes] = useState("")
  const [family_immunization,setFamily_immunization] = useState("")
  const [cancer,setCancer] = useState("")
  const [liver_disease,setLiver_disease] = useState("")
  const [kidney_decease,setKidney_decease] = useState("")
  const [blood_disorder,setBlood_disorder] = useState("")
  const [epilepsy,setEpilepsy] = useState("")
  const [mental_disorder,setMental_disorder] = useState("")
  const [others,setOthers] = useState("")
  const [family_primary_care_physician,setFamily_primary_care_physician] = useState("")
  const [alcohol_intake,setAlcohol_intake] = useState("")
  const [illicit_drug_use,setIllicit_drug_use] = useState("")
  const [tobacco_use,setTobacco_use] = useState("")
  const [menstrual_period,setMenstrual_period] = useState("")
  const [regular,setRegular] = useState("")
  const [irregular,setIrregular] = useState("")
  const [yes, setYes] = useState("")
  const [no, setNo] = useState("")
  const [duration,setDuration] = useState("")
  const [pads, setPads] = useState("")
  const [mild,setMild] = useState("")
  const [moderate,setModerate] = useState("")
  const [severe,setSevere] = useState("")
  const [last_ob,setLast_ob] = useState("")
  const [history_of_bleeding,setHistory_of_bleeding] = useState("")
  const [previous_pregnancy,setPrevious_pregnancy] = useState("")
  const [children,setChildren] = useState(0)
  const [height,setHeight] = useState("")
  const [weight,setWeight] = useState("")
  const [bmi,setBmi] = useState("")
  const [bp,setBp] = useState("")
  const [hr,setHr] = useState("")
  const [rr,setRr] = useState("")
  const [temp,setTemp] = useState("")
  const [appearance_skin,setAppearance_skin] = useState("")
  const [abdomen,setAbdomen] = useState("")
  const [head_neck,setHead_neck] = useState("")
  const [extremeties,setExtremeties] = useState("")
  const [chest_back,setChest_back] = useState("")
  const [physical_other,setPhysical_other] = useState("")
  const [x_ray,setX_ray] = useState("")
  const [diagnostic_impression,setDiagnostic_impression] = useState("")
  const [plan_xray,setPlan_xray] = useState("")
  const [diagnostics,setDiagnostics] = useState("")
  const [home_instructions,setHome_instructions] = useState("")
  const [ff,setFf] = useState("")
  const [referred,setReferred] = useState("")
  const [plan_impression,setPlan_impression] = useState("")
  const [home_medication,setHome_medication] = useState("")
  const [advice,setAdvice] = useState("")
  const [medical_certificate,setMedical_certificate] = useState("")
  const [enroll,setEnroll] = useState("")
  const [work,setWork] = useState("")
  const [participate_sports,setParticipate_sports] = useState("")
  const [enroll_require,setEnroll_require] = useState("")
  const [work_require,setWork_require] = useState("")
  const [participate_require,setParticipate_require] = useState("")
  const [physician_name,setPhysician_name] = useState("")
  const [liscene_number,setLiscene_number] = useState("")
  const [date,setDate] = useState("")
  const listsCollections = collection(db, "lists")
  // const navigate = useNavigate()

  const {
    modal4,
    handleModal4Open,
    handleModal4Close
  } = useModalhooks()

//logics
  const addStudentPatients = async (e) => {
    e.preventDefault()
    try {
      await addDoc(listsCollections, {
        surname: surname,
        given_name: given_name,
        middle_name: middle_name,
        age: age,
        sex: sex,
        status: status,
        birth: birth,
        course: course,
        school_year: school_year,
        address: address,
        contact: contact,
        mother_name: mother_name,
        father_name: father_name,
        guardian_name: guardian_name,
        emergency_contact: emergency_contact,
        relationship: relationship,
        guardian_contact: guardian_contact,
        known_illness: known_illness,
        past_confinement: past_confinement,
        known_allergies: known_allergies,
        past_immunization: past_immunization,
        present_immunization: present_immunization,
        current_medicine: current_medicine,
        dental_problem: dental_problem,
        primary_physician: primary_physician,
        allergy: allergy,
        asthma: asthma,
        tuberculosis: tuberculosis,
        hypertension: hypertension,
        heart_disease: heart_disease,
        stroke: stroke,
        diabetes: diabetes,
        family_immunization: family_immunization,
        cancer: cancer,
        liver_disease: liver_disease,
        kidney_decease: kidney_decease,
        blood_disorder: blood_disorder,
        epilepsy: epilepsy,
        mental_disorder: mental_disorder,
        others: others,
        family_primary_care_physician: family_primary_care_physician,
        alcohol_intake: alcohol_intake,
        illicit_drug_use: illicit_drug_use,
        tobacco_use: tobacco_use,
        menstrual_period: menstrual_period,
        regular: regular,
        irregular: irregular,
        yes: yes,
        no: no,
        duration: duration,
        pads:pads,
        mild: mild,
        moderate: moderate,
        severe: severe,
        last_ob: last_ob,
        history_of_bleeding: history_of_bleeding,
        previous_pregnancy: previous_pregnancy,
        children: children,
        height: height,
        weight: weight,
        bmi: bmi,
        bp: bp,
        hr: hr,
        rr: rr,
        temp: temp,
        appearance_skin: appearance_skin,
        abdomen: abdomen,
        head_neck: head_neck,
        extremeties: extremeties,
        chest_back: chest_back,
        physical_other: physical_other,
        x_ray: x_ray,
        diagnostic_impression: diagnostic_impression,
        plan_xray: plan_xray,
        diagnostics: diagnostics,
        home_instructions: home_instructions,
        ff: ff,
        referred: referred,
        plan_impression: plan_impression,
        home_medication: home_medication,
        advice: advice,
        medical_certificate: medical_certificate,
        enroll: enroll,
        work: work,
        participate_sports: participate_sports,
        enroll_require: enroll_require,
        work_require: work_require,
        participate_require: participate_require,
        physician_name: physician_name,
        liscene_number: liscene_number,
        date: date,
        createdAt: serverTimestamp()
      })
      // navigate("/")
      handleModal4Open()
    } catch (error) {
      console.error("Error adding student Patient:", error);
      alert("Error adding student Patient, please try again!");
    }
  }

  return (
    <>
      <div className="medical-records">
      <Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
        <div className="container">

        {/* Patient Information */}
        <h2>Patient Information</h2>
        <form onSubmit={addStudentPatients}>
        <table>
        <tbody>
          {/* Patient layer 1 */}
          <tr>
            <td>Surname:</td>
            <td><input type="text" placeholder="Surname..." onChange={(event) => setSurname(event.target.value)} /></td>
            <td>Given Name:</td>
            <td><input type="text" placeholder="Given name..." onChange={(event) => setGiven_name(event.target.value)} /></td>
            <td>Middle Name:</td>
            <td><input type="text" placeholder="Middle name..." onChange={(event) => setMiddle_name(event.target.value)} /></td>
          </tr>
          {/* Patient layer 2 */}
          <tr>
            <td>Age:</td>
            <td><input type="text" placeholder="Age..." onChange={(event) => setAge(event.target.value)} /></td>
            <td>Sex:</td>
            <td><select value={sex} onChange={(event) => setSex(event.target.value)} >
            <option value="" disabled>Sex...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select></td>
            <td>Status:</td>
            <td><input type="text" placeholder="Status..." onChange={(event) => setStatus(event.target.value)} /></td>
          </tr>
          {/* Patient layer 3 */}
          <tr>
            <td>Date of Birth:</td>
            <td><input type="date" placeholder="MM-DD-YYYY" onChange={(event) => setBirth(event.target.value)} /></td>
            <td>Course:</td>
            <td><select value={course} name="course" onChange={(event) => setCourse(event.target.value)} >
            <option value="" disabled>Course...</option>
            <option value="null">Bachelor of Science in Psychology</option>
            <option value="null">Bachelor of Science in Accountancy</option>
            <option value="null">Bachelor of Science in Business Administration</option>
            <option value="null">Bachelor of Science in Information Technology</option>
            <option value="null">Bachelor of Science in Computer Science</option>
            <option value="null">Bachelor of Science in Criminology</option>
            <option value="null">Bachelor of Science in Fisheries</option>
            <option value="null">Bachelor of Science in Agri- Fisheries Business Management</option>
            <option value="null">Bachelor of Science in Fishery Education</option>
            <option value="null">Bachelor of Science in Food Technology</option>
            <option value="null">Bachelor of Science in Nutrition and Dietetics</option>
            <option value="null">Bachelor of Science in Hotel and Restaurant Management</option>
            <option value="null">Bachelor of Science in Tourism</option>
            <option value="null">Bachelor of Secondary Education</option>
            <option value="null">Bachelor of Elementary Education</option>
          </select></td>
            <td>School Year Entered:</td>
            <td><input type="text" placeholder="Year..." onChange={(event) => setSchool_year(event.target.value)} /></td>
          </tr>
          {/* Patient layer 4 */}
          <tr>
            <td>Current Address:</td>
            <td colSpan={2}><input type="text" placeholder="Address..." style={{ width: "100%" }} onChange={(event) => setAddress(event.target.value)} /></td>
            <td>Cell No.</td>
            <td colSpan={2}><input type="text" placeholder="Contact..." style={{ width: "100%" }} onChange={(event) => setContact(event.target.value)} /></td>
          </tr>
          {/* Patient layer 5 */}
          <tr>
            <td>Mother Name:</td>
            <td><input type="text" placeholder="Mother name..." style={{ width: "100%" }} onChange={(event) => setMother_name(event.target.value)} /></td>
            <td>Father Name:</td>
            <td><input type="text" placeholder="Father name..." style={{ width: "100%" }} onChange={(event) => setFather_name(event.target.value)} /></td>
            <td>Guardian Name:</td>
            <td><input type="text" placeholder="Guardian name..." style={{ width: "100%" }} onChange={(event) => setGuardian_name(event.target.value)} /></td>
          </tr>
          {/* Patient layer 6 */}
          <tr>
            <td>Emergency Contact Person:</td>
            <td><input type="text" placeholder="Emergency contact person..." style={{ width: "100%" }} onChange={(event) => setEmergency_contact(event.target.value)} /></td>
            <td>Relationship:</td>
            <td><input type="text" placeholder="Relationship..." style={{ width: "100%" }} onChange={(event) => setRelationship(event.target.value)} /></td>
            <td>Cell No.</td>
            <td><input type="text" placeholder="Contact..." style={{ width: "100%" }} onChange={(event) => setGuardian_contact(event.target.value)} /></td>
          </tr>
          </tbody>
        </table><br/><br/>

        {/* Past Medical and Dental History */}
        <h2>Past Medical and Dental History  (Fill out if applicable)</h2>
        <table>
        <tbody>
        {/* Past layer 1 */}
        <tr>
          <td>Previous/present known illness:</td>
          <td colSpan={2}><input type="text" placeholder="Previous/present known illness..." style={{ width: "100%" }} onChange={(event) => setKnown_illness(event.target.value)} /></td>
          <td>Present immunization:</td>
          <td colSpan={2}><input type="text" placeholder="Present immunization..." style={{ width: "100%" }} onChange={(event) => setPresent_immunization(event.target.value)} /></td>
        </tr>
        {/* Past layer 2 */}
        <tr>
          <td>Past hospitalization/confinement:</td>
          <td colSpan={2}><input type="text" placeholder="Past hospitalization/confinement..." style={{ width: "100%" }} onChange={(event) => setPast_confinement(event.target.value)} /></td>
          <td>Current taking medicine:</td>
          <td colSpan={2}><input type="text" placeholder="Current taking medicine..." style={{ width: "100%" }} onChange={(event) => setCurrent_medicine(event.target.value)} /></td>
        </tr>
        {/* Past layer 3 */}
        <tr>
          <td>Known allergies to food or medicine:</td>
          <td colSpan={2}><input type="text" placeholder="Known allergies to food or medicine..." style={{ width: "100%" }} onChange={(event) => setKnown_allergies(event.target.value)} /></td>
          <td>Dental problem:</td>
          <td colSpan={2}><input type="text" placeholder="Dental problem..." style={{ width: "100%" }} onChange={(event) => setDental_problem(event.target.value)} /></td>
        </tr>
        {/* Past layer 4 */}
        <tr>
          <td>Childhood immunization:</td>
          <td colSpan={2}><input type="text" placeholder="Childhood immunization..." style={{ width: "100%" }} onChange={(event) => setPast_immunization(event.target.value)} /></td>
          <td>Primary care physician:</td>
          <td colSpan={2}><input type="text" placeholder="Primary care physician..." style={{ width: "100%" }} onChange={(event) => setPrimary_physician(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>

        {/* Family Medical History  (Fill out if applicable) */}
        <h2>Family Medical History  (Fill out if applicable)</h2>
        <table>
        <tbody>
        {/* Family layer 1 */}
        <tr>
          <td>Allergy:</td>
          <td colSpan={2}><input type="text" placeholder="Allergy..." style={{ width: "100%" }} onChange={(event) => setAllergy(event.target.value)} /></td>
          <td>Cancer:</td>
          <td colSpan={2}><input type="text" placeholder="Cancer..." style={{ width: "100%" }} onChange={(event) => setCancer(event.target.value)} /></td>
        </tr>
        {/* Family layer 2 */}
        <tr>
          <td>Asthma/hika:</td>
          <td colSpan={2}><input type="text" placeholder="Asthma/hika..." style={{ width: "100%" }} onChange={(event) => setAsthma(event.target.value)} /></td>
          <td>Liver disease:</td>
          <td colSpan={2}><input type="text" placeholder="Liver disease..." style={{ width: "100%" }} onChange={(event) => setLiver_disease(event.target.value)} /></td>
        </tr>
        {/* Family layer 3 */}
        <tr>
          <td>Tuberculosis:</td>
          <td colSpan={2}><input type="text" placeholder="Tuberculosis..." style={{ width: "100%" }} onChange={(event) => setTuberculosis(event.target.value)} /></td>
          <td>Kidney or bladder disease:</td>
          <td colSpan={2}><input type="text" placeholder="Kidney or bladder disease..." style={{ width: "100%" }} onChange={(event) => setKidney_decease(event.target.value)} /></td>
        </tr>
        {/* Family layer 4 */}
        <tr>
          <td>Hypertension:</td>
          <td colSpan={2}><input type="text" placeholder="Hypertension..." style={{ width: "100%" }} onChange={(event) => setHypertension(event.target.value)} /></td>
          <td>Blood disorder:</td>
          <td colSpan={2}><input type="text" placeholder="Blood disorder..." style={{ width: "100%" }} onChange={(event) => setBlood_disorder(event.target.value)} /></td>
        </tr>
        {/* Family layer 5 */}
        <tr>
          <td>Heart disease:</td>
          <td colSpan={2}><input type="text" placeholder="Heart disease..." style={{ width: "100%" }} onChange={(event) => setHeart_disease(event.target.value)} /></td>
          <td>Epilepsy:</td>
          <td colSpan={2}><input type="text" placeholder="Epilepsy..." style={{ width: "100%" }} onChange={(event) => setEpilepsy(event.target.value)} /></td>
        </tr>
        {/* Family layer 6 */}
        <tr>
          <td>Stroke:</td>
          <td colSpan={2}><input type="text" placeholder="Stroke..." style={{ width: "100%" }} onChange={(event) => setStroke(event.target.value)} /></td>
          <td>Mental disorder:</td>
          <td colSpan={2}><input type="text" placeholder="Mental disorder..." style={{ width: "100%" }} onChange={(event) => setMental_disorder(event.target.value)} /></td>
        </tr>
        {/* Family layer 7 */}
        <tr>
          <td>Diabetes:</td>
          <td colSpan={2}><input type="text" placeholder="Diabetes..." style={{ width: "100%" }} onChange={(event) => setDiabetes(event.target.value)} /></td>
          <td>Others:</td>
          <td colSpan={2}><input type="text" placeholder="Others..." style={{ width: "100%" }} onChange={(event) => setOthers(event.target.value)} /></td>
        </tr>
        {/* Family layer 8 */}
        <tr>
          <td>Childhood immunization:</td>
          <td colSpan={2}><input type="text" placeholder="Childhood immunization..." style={{ width: "100%" }} onChange={(event) => setFamily_immunization(event.target.value)} /></td>
          <td>Primary care physician:</td>
          <td colSpan={2}><input type="text" placeholder="Primary care physician..." style={{ width: "100%" }} onChange={(event) => setFamily_primary_care_physician(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>

        {/* Personal and Social History  (Fill out if applicable) */}
        <h2>Personal and Social History  (Fill out if applicable)</h2>
        <table>
        <tbody>
        {/* Personal layer 1 */}
        <tr>
          <td>Alcohol intake:</td>
          <td colSpan={2}><input type="text" placeholder="Alcohol intake..." style={{ width: "100%" }} onChange={(event) => setAlcohol_intake(event.target.value)} /></td>
          <td>Tobacco use:</td>
          <td colSpan={2}><input type="text" placeholder="Tobacco use..." style={{ width: "100%" }} onChange={(event) => setTobacco_use(event.target.value)} /></td>
        </tr>
        {/* Personal layer 2 */}
        <tr>
          <td>Illicit drug use:</td>
          <td colSpan={2}><input type="text" placeholder="Illicit drug use..." style={{ width: "100%" }} onChange={(event) => setIllicit_drug_use(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>

        {/* For Females (Fill out if applicable) */}
        <h2>For Females (Fill out if applicable)</h2>
        <h2>A. Menstrual period</h2>
        <table>
        <tbody>
        {/* Females layer 1 */}
        <tr>
          <td>menstrual period (MM-DD-YYYY):</td>
          <td colSpan={2}><input type="text" placeholder="Date of first day of LAST menstrual period (MM-DD-YYYY)..." style={{ width: "100%" }} onChange={(event) => setMenstrual_period(event.target.value)} /></td>
          <td>menstrual period (MM-DD-YYYY):</td>
          <td className="checkbox"> <div className="checkbox-cont"><input type="checkbox" name="regular" value="regular" className="custom-checkbox" onChange={(event) => setRegular(event.target.checked)} /> Regular </div>
           <div className="checkbox-cont"><input type="checkbox" name="irregular" value="irregular" onChange={(event) => setIrregular(event.target.checked)} /> Irregular </div></td>
        </tr>
        {/* Females layer 2 */}
        <tr>
          <td>Duration (days/weeks):</td>
          <td colSpan={2}><input type="text" placeholder="Duration (days/weeks)..." style={{ width: "100%" }} onChange={(event) => setDuration(event.target.value)} /></td>
          <td>No. of  pads/day:</td>
          <td colSpan={2}><input type="text" placeholder="No. of pads/day..." style={{ width: "100%" }} onChange={(event) => setPads(event.target.value)} /></td>
        </tr>
        {/* Females layer 3 */}
        <tr>
        <td></td>
        <td className="checkbox">
        <div className="checkbox-wrapper">
          <div className="checkbox-title">
            <h3>History of dysmenorrhea</h3>
          </div>
          <div className="checkbox-group">
            <div className="checkbox-option">
              <input type="checkbox" name="yes" value="yes" className="custom-checkbox" onChange={(event) => setYes(event.target.checked)} />
              Yes
            </div>
            <div className="checkbox-option">
              <input type="checkbox" name="no" value="no" className="custom-checkbox" onChange={(event) => setNo(event.target.checked)} />
              No
            </div>
          </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td className="checkbox">
        <div className="checkbox-wrapper">
          <div className="checkbox-title">
            <h3>If Yes, how severe is your dysmenorrhea?</h3>
          </div>
          <div className="checkbox-group">
            <div className="checkbox-option">
              <input type="checkbox" name="mild" value="mild" className="custom-checkbox" onChange={(event) => setMild(event.target.checked)} />
              Mild
            </div>
            <div className="checkbox-option">
              <input type="checkbox" name="moderate" value="moderate" className="custom-checkbox" onChange={(event) => setModerate(event.target.checked)} />
              Moderate
            </div>
            <div className="checkbox-option">
              <input type="checkbox" name="severe" value="severe" className="custom-checkbox" onChange={(event) => setSevere(event.target.checked)} />
              Severe
            </div>
          </div>
        </div>
      </td>
        </tr>
        {/* Females layer 4 */}
        <tr>
          <td>Last OB-GYN check-up:</td>
          <td colSpan={2}><input type="text" placeholder="Last OB-GYN check-up (MM-DD-YYYY)..." style={{ width: "100%" }} onChange={(event) => setLast_ob(event.target.value)} /></td>
          <td>History of excessive/abnormal bleeding (Details):</td>
          <td colSpan={2}><input type="text" placeholder="History of excessive/abnormal bleeding (Details)..." style={{ width: "100%" }} onChange={(event) => setHistory_of_bleeding(event.target.value)} /></td>
        </tr>
        {/* Females layer 5 */}
        <tr>
          <td>Previous Pregnancy:</td>
          <td colSpan={2}><input type="text" placeholder="(Details: normal, C-section, home/hospital, etc.)..." style={{ width: "100%" }} onChange={(event) => setPrevious_pregnancy(event.target.value)} /></td>
          <td>Children (If you have, how many?):</td>
          <td colSpan={2}><input type="text" placeholder="Children (If you have, how many?)..." style={{ width: "100%" }} onChange={(event) => setChildren(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>
        
        {/* Physical Examination  */}
        <h2>Physical Examination </h2>
        <table>
        <tbody>
        {/* Physical layer 1 */}
        <tr>
         <td><input type="text" placeholder="Height (m)..." onChange={(event) => setHeight(event.target.value)} /></td>
         <td><input type="text" placeholder="Weight (kg)..." onChange={(event) => setWeight(event.target.value)} /></td>
         <td><input type="text" placeholder="BMI (kg/m2)..." onChange={(event) => setBmi(event.target.value)} /></td>
         <td><input type="text" placeholder="BP (mmHg)..." onChange={(event) => setBp(event.target.value)} /></td>
         <td><input type="text" placeholder="HR (bpm)..." onChange={(event) => setHr(event.target.value)} /></td>
         <td><input type="text" placeholder="RR (cpm)..." onChange={(event) => setRr(event.target.value)} /></td>
         <td><input type="text" placeholder="Temp (c)..." onChange={(event) => setTemp(event.target.value)} /></td>
        </tr>
        {/* Physical layer 2 */}
        <tr>
         <td>Gen. Appearance and skin:</td>
         <td><input type="text" placeholder="Gen. Appearance and skin..." onChange={(event) => setAppearance_skin(event.target.value)} /></td>
         <td>Head and Neck:</td>
         <td><input type="text" placeholder="Head and Neck..." onChange={(event) => setHead_neck(event.target.value)} /></td>
         <td>Chest and Back:</td>
         <td><input type="text" placeholder="Chest and Back..." onChange={(event) => setChest_back(event.target.value)} /></td>
        </tr>
        {/* Physical layer 3 */}
        <tr>
         <td>Abdomen:</td>
         <td><input type="text" placeholder="Abdomen..." onChange={(event) => setAbdomen(event.target.value)} /></td>
         <td>Extremeties:</td>
         <td><input type="text" placeholder="Extremeties..." onChange={(event) => setExtremeties(event.target.value)} /></td>
         <td>Other:</td>
         <td><input type="text" placeholder="Other..." onChange={(event) => setPhysical_other(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>

        {/* Diagnostics Examination  */}
        <h2>Diagnostic Results (Pls. include date of examination)</h2>
        <table>
        <tbody>
        {/* Diagnostic layer 1 */}
        <tr>
         <td>Chest X-Ray:</td>
         <td colSpan={2}><input type="text" placeholder="Chest X-Ray..." onChange={(event) => setX_ray(event.target.value)} /></td>
         <td>Impression:</td>
         <td colSpan={2}><input type="text" placeholder="Impression..." onChange={(event) => setDiagnostics(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>

        {/* Plan  */}
        <h2>Plan</h2>
        <table>
        <tbody>
        {/* Plan layer 1 */}
        <tr>
         <td>Chest X-Ray:</td>
         <td colSpan={2}><input type="text" placeholder="Chest X-Ray..." onChange={(event) => setPlan_xray(event.target.value)} /></td>
         <td>Impression:</td>
         <td colSpan={2}><input type="text" placeholder="Impression..." onChange={(event) => setPlan_impression(event.target.value)} /></td>
        </tr>
        {/* Plan layer 1 */}
        <tr>
         <td>Diagnostics:</td>
         <td colSpan={2}><input type="text" placeholder="Diagnostics..." style={{ width: "100%" }} onChange={(event) => setDiagnostic_impression(event.target.value)} /></td>
         <td>Home Medication:</td>
         <td colSpan={2}><input type="text" placeholder="Home Medication..." style={{ width: "100%" }} onChange={(event) => setHome_medication(event.target.value)} /></td>
        </tr>
        {/* Plan layer 2 */}
        <tr>
         <td>Home Instructions:</td>
         <td colSpan={2}><input type="text" placeholder="Home Instructions..." style={{ width: "100%" }} onChange={(event) => setHome_instructions(event.target.value)} /></td>
         <td>Advice:</td>
         <td colSpan={2}><input type="text" placeholder="Advice..." style={{ width: "100%" }} onChange={(event) => setAdvice(event.target.value)} /></td>
        </tr>
        {/* Plan layer 3 */}
        <tr>
         <td>F-f (Date):</td>
         <td colSpan={2}><input type="text" placeholder="F-f (Date)..." style={{ width: "100%" }} onChange={(event) => setFf(event.target.value)} /></td>
         <td>Medical Certificate issued:</td>
         <td colSpan={2}><input type="text" placeholder="Medical Certificate issued..." style={{ width: "100%" }} onChange={(event) => setMedical_certificate(event.target.value)} /></td>
        </tr>
        {/* Plan layer 4 */}
        <tr>
         <td>Referred:</td>
         <td colSpan={2}><input type="text" placeholder="Referred..." style={{ width: "100%" }} onChange={(event) => setReferred(event.target.value)} /></td>
        </tr>
        </tbody>
        </table><br/><br/>

        {/* Recommendation */}
        <h2>Recommendation</h2>
        {/* Recommendation layer 1 */}
        <div className="checkbox-recommend-parent">
        <div className="border-test">
        <div className="checkbox-recommend-child">
         <input type="checkbox" name="enroll" value={enroll} onChange={(event) => setEnroll(event.target.checked)} />
         <h3>Fit to enroll</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox" name="work" value={work} onChange={(event) => setWork(event.target.checked)} />
         <h3>Fit to work</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox" name="participate_sports" value={participate_sports} onChange={(event) => setParticipate_sports(event.target.checked)}/>
         <h3>Fit to participate sports</h3>
         </div>
         </div>
         {/* Recommendation layer 2 */}
         <div className="border-test">
        <div className="checkbox-recommend-child">
         <input type="checkbox" name="enroll_require" value={enroll_require} onChange={(event) => setEnroll_require(event.target.checked)}/>
         <h3>Fit to enroll but require further evaluation</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox" name="work_require" value={work_require} onChange={(event) => setWork_require(event.target.checked)}/>
         <h3>Fit to work but require further evaluation</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox" name="participate_require" value={participate_require} onChange={(event) => setParticipate_require(event.target.checked)}/>
         <h3>Fit to participate sports but require further evaluation</h3>
         </div>
         </div>
        </div>
        <br/>
        <br/>

        {/* last */}
        {/* last layer 1 */}
        <div className="last-container-parent">
        <div className="last-container-child">
        <input type="text" placeholder="Physician name..." onChange={(event) => setPhysician_name(event.target.value)}/>
        <input type="text" placeholder="License number..." onChange={(event) => setLiscene_number(event.target.value)}/>
        <input type="date" placeholder="Date" onChange={(event) => setDate(event.target.value)}/>
        </div>
        <div className="last-container-child">
        <Link to="/"><button>Cancel</button></Link>
        <button type="submit">Submit</button>
        </div>
        </div>

      </form>
        </div>
      </div>

      {/* Modal */}
            <Modal4 isOpen={modal4} onClose={handleModal4Close} />
    </>
  )
}

export default MedicalRecords
