/****** react library ******/
import { useState } from "react"
import PropTypes from "prop-types"
// import { useNavigate } from "react-router-dom";
/****** firebase ******/
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config"





const UpdateMedicalRecords = ({ list, onClose, onUpdate }) => {
//Hooks
const [surname, setSurname] = useState(list.surname)
const [given_name, setGiven_name] = useState(list.given_name)
const [middle_name, setMiddle_name] = useState(list.middle_name)
const [age, setAge] = useState(list.age)
const [sex, setSex] = useState(list.sex)
const [status,setStatus] = useState(list.status)
const [birth,setBirth] = useState(list.birth)
const [course, setCourse] = useState(list.course)
const [school_year,setSchool_year] = useState(list.school_year)
const [address,setAddress] = useState(list.address)
const [contact,setContact] = useState(list.contact)
const [mother_name,setMother_name] = useState(list.mother_name)
const [father_name,setFather_name] = useState(list.father_name)
const [guardian_name,setGuardian_name] = useState(list.guardian_name)
const [emergency_contact,setEmergency_contact] = useState(list.emergency_contact)
const [relationship,setRelationship] = useState(list.relationship)
const [guardian_contact,setGuardian_contact] = useState(list.guardian_contact)
const [known_illness,setKnown_illness] = useState(list.known_illness)
const [past_confinement,setPast_confinement] = useState(list.past_confinement)
const [known_allergies,setKnown_allergies] = useState(list.known_allergies)
const [past_immunization,setPast_immunization] = useState(list.past_confinement)
const [present_immunization,setPresent_immunization] = useState(list.present_immunization)
const [current_medicine,setCurrent_medicine] = useState(list.current_medicine)
const [dental_problem,setDental_problem] = useState(list.dental_problem)
const [primary_physician,setPrimary_physician] = useState(list.primary_physician)
const [allergy,setAllergy] = useState(list.allergy)
const [asthma,setAsthma] = useState(list.asthma)
const [tuberculosis,setTuberculosis] = useState(list.tuberculosis)
const [hypertension,setHypertension] = useState(list.hypertension)
const [heart_disease,setHeart_disease] = useState(list.heart_disease)
const [stroke,setStroke] = useState(list.stroke)
const [diabetes,setDiabetes] = useState(list.diabetes)
const [family_immunization,setFamily_immunization] = useState(list.family_immunization)
const [cancer,setCancer] = useState(list.cancer)
const [liver_disease,setLiver_disease] = useState(list.liver_disease)
const [kidney_decease,setKidney_decease] = useState(list.kidney_decease)
const [blood_disorder,setBlood_disorder] = useState(list.blood_disorder)
const [epilepsy,setEpilepsy] = useState(list.epilepsy)
const [mental_disorder,setMental_disorder] = useState(list.mental_disorder)
const [others,setOthers] = useState(list.others)
const [family_primary_care_physician,setFamily_primary_care_physician] = useState(list.family_primary_care_physician)
const [alcohol_intake,setAlcohol_intake] = useState(list.alcohol_intake)
const [illicit_drug_use,setIllicit_drug_use] = useState(list.illicit_drug_use)
const [tobacco_use,setTobacco_use] = useState(list.tobacco_use)
const [menstrual_period,setMenstrual_period] = useState(list.menstrual_period)
const [regular,setRegular] = useState(list.regular)
const [irregular,setIrregular] = useState(list.irregular)
const [yes, setYes] = useState(list.yes)
const [no, setNo] = useState(list.no)
const [duration,setDuration] = useState(list.duration)
const [pads, setPads] = useState(list.pads)
const [mild,setMild] = useState(list.mild)
const [moderate,setModerate] = useState(list.moderate)
const [severe,setSevere] = useState(list.severe)
const [last_ob,setLast_ob] = useState(list.last_ob)
const [history_of_bleeding,setHistory_of_bleeding] = useState(list.history_of_bleeding)
const [previous_pregnancy,setPrevious_pregnancy] = useState(list.previous_pregnancy)
const [children,setChildren] = useState(list.children)
const [height,setHeight] = useState(list.height)
const [weight,setWeight] = useState(list.weight)
const [bmi,setBmi] = useState(list.bmi)
const [bp,setBp] = useState(list.bp)
const [hr,setHr] = useState(list.hr)
const [rr,setRr] = useState(list.rr)
const [temp,setTemp] = useState(list.temp)
const [appearance_skin,setAppearance_skin] = useState(list.appearance_skin)
const [abdomen,setAbdomen] = useState(list.abdomen)
const [head_neck,setHead_neck] = useState(list.head_neck)
const [extremeties,setExtremeties] = useState(list.extremeties)
const [chest_back,setChest_back] = useState(list.chest_back)
const [physical_other,setPhysical_other] = useState(list.physical_other)
const [x_ray,setX_ray] = useState(list.x_ray)
const [diagnostic_impression,setDiagnostic_impression] = useState(list.diagnostic_impression)
const [plan_xray,setPlan_xray] = useState(list.plan_xray)
const [diagnostics,setDiagnostics] = useState(list.diagnostics)
const [home_instructions,setHome_instructions] = useState(list.home_instructions)
const [ff,setFf] = useState(list.ff)
const [referred,setReferred] = useState(list.referred)
const [plan_impression,setPlan_impression] = useState(list.plan_impression)
const [home_medication,setHome_medication] = useState(list.home_medication)
const [advice,setAdvice] = useState(list.advice)
const [medical_certificate,setMedical_certificate] = useState(list.medical_certificate)
const [enroll,setEnroll] = useState(list.enroll)
const [work,setWork] = useState(list.work)
const [participate_sports,setParticipate_sports] = useState(list.participate_sports)
const [enroll_require,setEnroll_require] = useState(list.enroll_require)
const [work_require,setWork_require] = useState(list.work_require)
const [participate_require,setParticipate_require] = useState(list.participate_require)
const [physician_name,setPhysician_name] = useState(list.physician_name)
const [liscene_number,setLiscene_number] = useState(list.liscene_number)
const [date,setDate] = useState(list.date)


//logics 
    const handleUpdate = async (event) => {
        event.preventDefault();

        const updateData = {
            surname,
            given_name,
            middle_name,
            age,
            sex,
            status,
            birth,
            course,
            school_year,
            address,
            contact,
            mother_name,
            father_name,
            guardian_name,
            emergency_contact,
            relationship,
            guardian_contact,
            known_illness,
            past_confinement,
            known_allergies,
            past_immunization,
            present_immunization,
            current_medicine,
            dental_problem,
            primary_physician,
            allergy,
            asthma,
            tuberculosis,
            hypertension,
            heart_disease,
            stroke,
            diabetes,
            family_immunization,
            cancer,
            liver_disease,
            kidney_decease,
            blood_disorder,
            epilepsy,
            mental_disorder,
            others,
            family_primary_care_physician,
            alcohol_intake,
            illicit_drug_use,
            tobacco_use,
            menstrual_period,
            regular,
            irregular,
            yes,
            no,
            duration,
            pads,
            mild,
            moderate,
            severe,
            last_ob,
            history_of_bleeding,
            previous_pregnancy,
            children,
            height,
            weight,
            bmi,
            bp,
            hr,
            rr,
            temp,
            appearance_skin,
            abdomen,
            head_neck,
            extremeties,
            chest_back,
            physical_other,
            x_ray,
            diagnostic_impression,
            plan_xray,
            diagnostics,
            home_instructions,
            ff,
            referred,
            plan_impression,
            home_medication,
            advice,
            medical_certificate,
            enroll,
            work,
            participate_sports,
            enroll_require,
            work_require,
            participate_require,
            physician_name,
            liscene_number,
            date
        }
        const listDoc = doc(db, "lists", list.id)
        await updateDoc(listDoc, updateData)
        onUpdate({ ...list, ...updateData })
        onClose()
        }

    

  return (
    <>
    <div className="update-overlay" onClick={onClose}>
    <div className="update-records">
    <div className="medical-records">
    {/*<Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>*/}
      <div className="container" onClick={(e) => e.stopPropagation()}>

      {/* Patient Information */}
      <h2>Patient Information</h2>
      <form onSubmit={handleUpdate}>
      <table>
      <tbody>
        {/* Patient layer 1 */}
        <tr>
          <td>Surname:</td>
          <td><input type="text" placeholder="Surname..." value={surname} onChange={(event) => setSurname(event.target.value)} /></td>
          <td>Given Name:</td>
          <td><input type="text" placeholder="Given name..." value={given_name} onChange={(event) => setGiven_name(event.target.value)} /></td>
          <td>Middle Name:</td>
          <td><input type="text" placeholder="Middle name..." value={middle_name} onChange={(event) => setMiddle_name(event.target.value)} /></td>
        </tr>
        {/* Patient layer 2 */}
        <tr>
          <td>Age:</td>
          <td><input type="text" placeholder="Age..." value={age} onChange={(event) => setAge(event.target.value)} /></td>
          <td>Sex:</td>
          <td><select value={sex} onChange={(event) => setSex(event.target.value)} >
          <option value="" disabled>Sex...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select></td>
          <td>Status:</td>
          <td>
          <select value={status} onChange={(event) => setStatus(event.target.value)} required>
          <option value="" disabled>status...</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Devorced">Devorced</option>
          <option value="Widowed">Widowed</option>
        </select>
          </td>
        </tr>
        {/* Patient layer 3 */}
        <tr>
          <td>Date of Birth:</td>
          <td><input type="date" placeholder="MM-DD-YYYY" value={birth} onChange={(event) => setBirth(event.target.value)} /></td>
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
          <td><input type="text" placeholder="Year..." value={school_year} onChange={(event) => setSchool_year(event.target.value)} /></td>
        </tr>
        {/* Patient layer 4 */}
        <tr>
          <td>Current Address:</td>
          <td colSpan={2}><input type="text" placeholder="Address..." style={{ width: "100%" }} value={address} onChange={(event) => setAddress(event.target.value)} /></td>
          <td>Cell No.</td>
          <td colSpan={2}><input type="text" placeholder="Contact..." style={{ width: "100%" }} value={contact} onChange={(event) => setContact(event.target.value)} /></td>
        </tr>
        {/* Patient layer 5 */}
        <tr>
          <td>Mother Name:</td>
          <td><input type="text" placeholder="Mother name..." style={{ width: "100%" }} value={mother_name} onChange={(event) => setMother_name(event.target.value)} /></td>
          <td>Father Name:</td>
          <td><input type="text" placeholder="Father name..." style={{ width: "100%" }} value={father_name} onChange={(event) => setFather_name(event.target.value)} /></td>
          <td>Guardian Name:</td>
          <td><input type="text" placeholder="Guardian name..." style={{ width: "100%" }} value={guardian_name} onChange={(event) => setGuardian_name(event.target.value)} /></td>
        </tr>
        {/* Patient layer 6 */}
        <tr>
          <td>Emergency Contact Person:</td>
          <td><input type="text" placeholder="Emergency contact person..." style={{ width: "100%" }} value={emergency_contact} onChange={(event) => setEmergency_contact(event.target.value)} /></td>
          <td>Relationship:</td>
          <td><input type="text" placeholder="Relationship..." style={{ width: "100%" }} value={relationship} onChange={(event) => setRelationship(event.target.value)} /></td>
          <td>Cell No.</td>
          <td><input type="text" placeholder="Contact..." style={{ width: "100%" }} value={guardian_contact} onChange={(event) => setGuardian_contact(event.target.value)} /></td>
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
        <td colSpan={2}><input type="text" placeholder="Previous/present known illness..." style={{ width: "100%" }} value={known_illness} onChange={(event) => setKnown_illness(event.target.value)} /></td>
        <td>Present immunization:</td>
        <td colSpan={2}><input type="text" placeholder="Present immunization..." style={{ width: "100%" }} value={present_immunization} onChange={(event) => setPresent_immunization(event.target.value)} /></td>
      </tr>
      {/* Past layer 2 */}
      <tr>
        <td>Past hospitalization/confinement:</td>
        <td colSpan={2}><input type="text" placeholder="Past hospitalization/confinement..." style={{ width: "100%" }} value={past_confinement} onChange={(event) => setPast_confinement(event.target.value)} /></td>
        <td>Current taking medicine:</td>
        <td colSpan={2}><input type="text" placeholder="Current taking medicine..." style={{ width: "100%" }} value={current_medicine} onChange={(event) => setCurrent_medicine(event.target.value)} /></td>
      </tr>
      {/* Past layer 3 */}
      <tr>
        <td>Known allergies to food or medicine:</td>
        <td colSpan={2}><input type="text" placeholder="Known allergies to food or medicine..." style={{ width: "100%" }} value={known_allergies} onChange={(event) => setKnown_allergies(event.target.value)} /></td>
        <td>Dental problem:</td>
        <td colSpan={2}><input type="text" placeholder="Dental problem..." style={{ width: "100%" }} value={dental_problem} onChange={(event) => setDental_problem(event.target.value)} /></td>
      </tr>
      {/* Past layer 4 */}
      <tr>
        <td>Childhood immunization:</td>
        <td colSpan={2}><input type="text" placeholder="Childhood immunization..." style={{ width: "100%" }} value={past_immunization} onChange={(event) => setPast_immunization(event.target.value)} /></td>
        <td>Primary care physician:</td>
        <td colSpan={2}><input type="text" placeholder="Primary care physician..." style={{ width: "100%" }} value={primary_physician} onChange={(event) => setPrimary_physician(event.target.value)} /></td>
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
        <td colSpan={2}><input type="text" placeholder="Allergy..." style={{ width: "100%" }} value={allergy} onChange={(event) => setAllergy(event.target.value)} /></td>
        <td>Cancer:</td>
        <td colSpan={2}><input type="text" placeholder="Cancer..." style={{ width: "100%" }} value={cancer} onChange={(event) => setCancer(event.target.value)} /></td>
      </tr>
      {/* Family layer 2 */}
      <tr>
        <td>Asthma/hika:</td>
        <td colSpan={2}><input type="text" placeholder="Asthma/hika..." style={{ width: "100%" }} value={asthma} onChange={(event) => setAsthma(event.target.value)} /></td>
        <td>Liver disease:</td>
        <td colSpan={2}><input type="text" placeholder="Liver disease..." style={{ width: "100%" }} value={liver_disease} onChange={(event) => setLiver_disease(event.target.value)} /></td>
      </tr>
      {/* Family layer 3 */}
      <tr>
        <td>Tuberculosis:</td>
        <td colSpan={2}><input type="text" placeholder="Tuberculosis..." style={{ width: "100%" }} value={tuberculosis} onChange={(event) => setTuberculosis(event.target.value)} /></td>
        <td>Kidney or bladder disease:</td>
        <td colSpan={2}><input type="text" placeholder="Kidney or bladder disease..." style={{ width: "100%" }} value={kidney_decease} onChange={(event) => setKidney_decease(event.target.value)} /></td>
      </tr>
      {/* Family layer 4 */}
      <tr>
        <td>Hypertension:</td>
        <td colSpan={2}><input type="text" placeholder="Hypertension..." style={{ width: "100%" }} value={hypertension} onChange={(event) => setHypertension(event.target.value)} /></td>
        <td>Blood disorder:</td>
        <td colSpan={2}><input type="text" placeholder="Blood disorder..." style={{ width: "100%" }} value={blood_disorder} onChange={(event) => setBlood_disorder(event.target.value)} /></td>
      </tr>
      {/* Family layer 5 */}
      <tr>
        <td>Heart disease:</td>
        <td colSpan={2}><input type="text" placeholder="Heart disease..." style={{ width: "100%" }} value={heart_disease} onChange={(event) => setHeart_disease(event.target.value)} /></td>
        <td>Epilepsy:</td>
        <td colSpan={2}><input type="text" placeholder="Epilepsy..." style={{ width: "100%" }} value={epilepsy} onChange={(event) => setEpilepsy(event.target.value)} /></td>
      </tr>
      {/* Family layer 6 */}
      <tr>
        <td>Stroke:</td>
        <td colSpan={2}><input type="text" placeholder="Stroke..." style={{ width: "100%" }} value={stroke} onChange={(event) => setStroke(event.target.value)} /></td>
        <td>Mental disorder:</td>
        <td colSpan={2}><input type="text" placeholder="Mental disorder..." style={{ width: "100%" }} value={mental_disorder} onChange={(event) => setMental_disorder(event.target.value)} /></td>
      </tr>
      {/* Family layer 7 */}
      <tr>
        <td>Diabetes:</td>
        <td colSpan={2}><input type="text" placeholder="Diabetes..." style={{ width: "100%" }} value={diabetes} onChange={(event) => setDiabetes(event.target.value)} /></td>
        <td>Others:</td>
        <td colSpan={2}><input type="text" placeholder="Others..." style={{ width: "100%" }} value={others} onChange={(event) => setOthers(event.target.value)} /></td>
      </tr>
      {/* Family layer 8 */}
      <tr>
        <td>Childhood immunization:</td>
        <td colSpan={2}><input type="text" placeholder="Childhood immunization..." style={{ width: "100%" }} value={family_immunization} onChange={(event) => setFamily_immunization(event.target.value)} /></td>
        <td>Primary care physician:</td>
        <td colSpan={2}><input type="text" placeholder="Primary care physician..." style={{ width: "100%" }} value={family_primary_care_physician} onChange={(event) => setFamily_primary_care_physician(event.target.value)} /></td>
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
        <td colSpan={2}><input type="text" placeholder="Alcohol intake..." style={{ width: "100%" }} value={alcohol_intake} onChange={(event) => setAlcohol_intake(event.target.value)} /></td>
        <td>Tobacco use:</td>
        <td colSpan={2}><input type="text" placeholder="Tobacco use..." style={{ width: "100%" }} value={tobacco_use} onChange={(event) => setTobacco_use(event.target.value)} /></td>
      </tr>
      {/* Personal layer 2 */}
      <tr>
        <td>Illicit drug use:</td>
        <td colSpan={2}><input type="text" placeholder="Illicit drug use..." style={{ width: "100%" }} value={illicit_drug_use} onChange={(event) => setIllicit_drug_use(event.target.value)} /></td>
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
        <td colSpan={2}><input type="text" placeholder="Date of first day of LAST menstrual period (MM-DD-YYYY)..." style={{ width: "100%" }} value={menstrual_period} onChange={(event) => setMenstrual_period(event.target.value)} /></td>
        <td>menstrual period (MM-DD-YYYY):</td>
        <td className="checkbox"> <div className="checkbox-cont"><input type="checkbox" name="regular" value="regular" className="custom-checkbox" onChange={(event) => setRegular(event.target.checked)} /> Regular </div>
         <div className="checkbox-cont"><input type="checkbox" name="irregular" value="irregular" onChange={(event) => setIrregular(event.target.checked)} /> Irregular </div></td>
      </tr>
      {/* Females layer 2 */}
      <tr>
        <td>Duration (days/weeks):</td>
        <td colSpan={2}><input type="text" placeholder="Duration (days/weeks)..." style={{ width: "100%" }} value={duration} onChange={(event) => setDuration(event.target.value)} /></td>
        <td>No. of  pads/day:</td>
        <td colSpan={2}><input type="text" placeholder="No. of pads/day..." style={{ width: "100%" }} value={pads} onChange={(event) => setPads(event.target.value)} /></td>
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
        <td colSpan={2}><input type="text" placeholder="Last OB-GYN check-up (MM-DD-YYYY)..." style={{ width: "100%" }} value={last_ob} onChange={(event) => setLast_ob(event.target.value)} /></td>
        <td>History of excessive/abnormal bleeding (Details):</td>
        <td colSpan={2}><input type="text" placeholder="History of excessive/abnormal bleeding (Details)..." style={{ width: "100%" }} value={history_of_bleeding} onChange={(event) => setHistory_of_bleeding(event.target.value)} /></td>
      </tr>
      {/* Females layer 5 */}
      <tr>
        <td>Previous Pregnancy:</td>
        <td colSpan={2}><input type="text" placeholder="(Details: normal, C-section, home/hospital, etc.)..." style={{ width: "100%" }} value={previous_pregnancy} onChange={(event) => setPrevious_pregnancy(event.target.value)} /></td>
        <td>Children (If you have, how many?):</td>
        <td colSpan={2}><input type="text" placeholder="Children (If you have, how many?)..." style={{ width: "100%" }} value={children} onChange={(event) => setChildren(event.target.value)} /></td>
      </tr>
      </tbody>
      </table><br/><br/>
      
      {/* Physical Examination  */}
      <h2>Physical Examination </h2>
      <table>
      <tbody>
      {/* Physical layer 1 */}
      <tr>
       <td><input type="text" placeholder="Height (m)..." value={height} onChange={(event) => setHeight(event.target.value)} /></td>
       <td><input type="text" placeholder="Weight (kg)..." value={weight} onChange={(event) => setWeight(event.target.value)} /></td>
       <td><input type="text" placeholder="BMI (kg/m2)..." value={bmi} onChange={(event) => setBmi(event.target.value)} /></td>
       <td><input type="text" placeholder="BP (mmHg)..." value={bp} onChange={(event) => setBp(event.target.value)} /></td>
       <td><input type="text" placeholder="HR (bpm)..." value={hr} onChange={(event) => setHr(event.target.value)} /></td>
       <td><input type="text" placeholder="RR (cpm)..." value={rr} onChange={(event) => setRr(event.target.value)} /></td>
       <td><input type="text" placeholder="Temp (c)..." value={temp} onChange={(event) => setTemp(event.target.value)} /></td>
      </tr>
      {/* Physical layer 2 */}
      <tr>
       <td>Gen. Appearance and skin:</td>
       <td><input type="text" placeholder="Gen. Appearance and skin..." value={appearance_skin} onChange={(event) => setAppearance_skin(event.target.value)} /></td>
       <td>Head and Neck:</td>
       <td><input type="text" placeholder="Head and Neck..." value={head_neck} onChange={(event) => setHead_neck(event.target.value)} /></td>
       <td>Chest and Back:</td>
       <td><input type="text" placeholder="Chest and Back..." value={chest_back} onChange={(event) => setChest_back(event.target.value)} /></td>
      </tr>
      {/* Physical layer 3 */}
      <tr>
       <td>Abdomen:</td>
       <td><input type="text" placeholder="Abdomen..." value={abdomen} onChange={(event) => setAbdomen(event.target.value)} /></td>
       <td>Extremeties:</td>
       <td><input type="text" placeholder="Extremeties..." value={extremeties} onChange={(event) => setExtremeties(event.target.value)} /></td>
       <td>Other:</td>
       <td><input type="text" placeholder="Other..." value={physical_other} onChange={(event) => setPhysical_other(event.target.value)} /></td>
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
       <td colSpan={2}><input type="text" placeholder="Chest X-Ray..." value={x_ray} onChange={(event) => setX_ray(event.target.value)} /></td>
       <td>Impression:</td>
       <td colSpan={2}><input type="text" placeholder="Impression..." value={diagnostics} onChange={(event) => setDiagnostics(event.target.value)} /></td>
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
       <td colSpan={2}><input type="text" placeholder="Chest X-Ray..." value={plan_xray} onChange={(event) => setPlan_xray(event.target.value)} /></td>
       <td>Impression:</td>
       <td colSpan={2}><input type="text" placeholder="Impression..." value={plan_impression} onChange={(event) => setPlan_impression(event.target.value)} /></td>
      </tr>
      {/* Plan layer 1 */}
      <tr>
       <td>Diagnostics:</td>
       <td colSpan={2}><input type="text" placeholder="Diagnostics..." style={{ width: "100%" }} value={diagnostic_impression} onChange={(event) => setDiagnostic_impression(event.target.value)} /></td>
       <td>Home Medication:</td>
       <td colSpan={2}><input type="text" placeholder="Home Medication..." style={{ width: "100%" }} value={home_medication} onChange={(event) => setHome_medication(event.target.value)} /></td>
      </tr>
      {/* Plan layer 2 */}
      <tr>
       <td>Home Instructions:</td>
       <td colSpan={2}><input type="text" placeholder="Home Instructions..." style={{ width: "100%" }} value={home_instructions} onChange={(event) => setHome_instructions(event.target.value)} /></td>
       <td>Advice:</td>
       <td colSpan={2}><input type="text" placeholder="Advice..." style={{ width: "100%" }} value={advice} onChange={(event) => setAdvice(event.target.value)} /></td>
      </tr>
      {/* Plan layer 3 */}
      <tr>
       <td>F-f (Date):</td>
       <td colSpan={2}><input type="text" placeholder="F-f (Date)..." style={{ width: "100%" }} value={ff} onChange={(event) => setFf(event.target.value)} /></td>
       <td>Medical Certificate issued:</td>
       <td colSpan={2}><input type="text" placeholder="Medical Certificate issued..." style={{ width: "100%" }} value={medical_certificate} onChange={(event) => setMedical_certificate(event.target.value)} /></td>
      </tr>
      {/* Plan layer 4 */}
      <tr>
       <td>Referred:</td>
       <td colSpan={2}><input type="text" placeholder="Referred..." style={{ width: "100%" }} value={referred} onChange={(event) => setReferred(event.target.value)} /></td>
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
      <input type="text" placeholder="Physician name..." value={physician_name} onChange={(event) => setPhysician_name(event.target.value)}/>
      <input type="text" placeholder="License number..." value={liscene_number} onChange={(event) => setLiscene_number(event.target.value)}/>
      <input type="date" placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)}/>
      </div>
      <div className="last-container-child">
      <button onClick={onClose}>Cancel</button>
      <button type="submit">Submit</button>
      </div>
      </div>

    </form>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

UpdateMedicalRecords.propTypes = {
    list: PropTypes.shape({
      surname: PropTypes.string.isRequired,
      given_name: PropTypes.string.isRequired,
      middle_name: PropTypes.string.isRequired,
      age: PropTypes.number,
      sex: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      school_year: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      contact: PropTypes.number.isRequired,
      mother_name: PropTypes.string.isRequired,
      father_name: PropTypes.string.isRequired,
      guardian_name: PropTypes.string.isRequired,
      emergency_contact: PropTypes.number.isRequired,
      relationship: PropTypes.string.isRequired,
      guardian_contact: PropTypes.number.isRequired,
      known_illness: PropTypes.string.isRequired,
      past_confinement: PropTypes.string.isRequired,
      known_allergies: PropTypes.string.isRequired,
      past_immunization: PropTypes.string.isRequired,
      present_immunization: PropTypes.string.isRequired,
      current_medicine: PropTypes.string.isRequired,
      dental_problem: PropTypes.string.isRequired,
      primary_physician: PropTypes.string.isRequired,
      allergy: PropTypes.string.isRequired,
      asthma: PropTypes.string.isRequired,
      tuberculosis: PropTypes.string.isRequired,
      hypertension: PropTypes.string.isRequired,
      heart_disease: PropTypes.string.isRequired,
      stroke: PropTypes.string.isRequired,
      diabetes: PropTypes.string.isRequired,
      family_immunization: PropTypes.string.isRequired,
      cancer: PropTypes.string.isRequired,
      liver_disease: PropTypes.string.isRequired,
      kidney_decease: PropTypes.string.isRequired,
      blood_disorder: PropTypes.string.isRequired,
      epilepsy: PropTypes.string.isRequired,
      mental_disorder: PropTypes.string.isRequired,
      others: PropTypes.string.isRequired,
      family_primary_care_physician: PropTypes.string.isRequired,
      alcohol_intake: PropTypes.string.isRequired,
      illicit_drug_use: PropTypes.string.isRequired,
      tobacco_use: PropTypes.string.isRequired,
      menstrual_period: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
      irregular: PropTypes.string.isRequired,
      yes: PropTypes.string.isRequired,
      no: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      pads: PropTypes.string.isRequired,
      mild: PropTypes.string.isRequired,
      moderate: PropTypes.string.isRequired,
      severe: PropTypes.string.isRequired,
      last_ob: PropTypes.string.isRequired,
      history_of_bleeding: PropTypes.string.isRequired,
      previous_pregnancy: PropTypes.string.isRequired,
      children: PropTypes.number.isRequired,
      height: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      bmi: PropTypes.string.isRequired,
      bp: PropTypes.string.isRequired,
      hr: PropTypes.string.isRequired,
      rr: PropTypes.string.isRequired,
      temp: PropTypes.string.isRequired,
      appearance_skin: PropTypes.string.isRequired,
      abdomen: PropTypes.string.isRequired,
      head_neck: PropTypes.string.isRequired,
      extremeties: PropTypes.string.isRequired,
      chest_back: PropTypes.string.isRequired,
      physical_other: PropTypes.string.isRequired,
      x_ray: PropTypes.string.isRequired,
      diagnostic_impression: PropTypes.string.isRequired,
      plan_xray: PropTypes.string.isRequired,
      diagnostics: PropTypes.string.isRequired,
      home_instructions: PropTypes.string.isRequired,
      ff: PropTypes.string.isRequired,
      referred: PropTypes.string.isRequired,
      plan_impression: PropTypes.string.isRequired,
      home_medication: PropTypes.string.isRequired,
      advice: PropTypes.string.isRequired,
      medical_certificate: PropTypes.string.isRequired,
      enroll: PropTypes.string.isRequired,
      work: PropTypes.string.isRequired,
      participate_sports: PropTypes.string.isRequired,
      enroll_require: PropTypes.string.isRequired,
      work_require: PropTypes.string.isRequired,
      participate_require: PropTypes.string.isRequired,
      physician_name: PropTypes.string.isRequired,
      liscene_number: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

export default UpdateMedicalRecords
