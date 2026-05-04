function createCybersecurityAwarenessForm() {
  const form = FormApp.create(
    'Cybersecurity Survey — Nepal University Students'
  );

  form.setDescription(
    'Dear Respondent,\n\n' +
      'I am an MBA IT student at the School of Management, Tribhuvan University, conducting a Graduate Research Project (GRP) as part of the partial fulfillment of the requirements for the MBA IT degree at SOMTU.\n\n' +
      'This research aims to understand the feasibility and interrelationship of cybersecurity awareness, digital behavior, and risk mitigation practices among university students. Please be assured that your responses will remain strictly confidential and will be used only for academic purposes in summarized form. Your time and input are deeply appreciated.\n\n' +
      'Estimated Time: about 10–12 minutes\n\n' +
      'Sections 1, 2, and 4: 1 = Strongly Disagree … 5 = Strongly Agree\n\n' +
      'Section 3 only: 1 = Never … 5 = Always\n\n' +
      'Thank you for your valuable participation. Your honest answers will help produce better research findings and more accurate outcomes.\n\n' +
      'Sincerely,\n' +
      'Babulal Tamang\n' +
      'MBA IT Scholar, School of Management, TU\n' +
      '✉ tamangsugam09@gmail.com'
  );

  const scaleAgreeLabels = ['Strongly Disagree', 'Strongly Agree'];
  const scaleFrequencyLabels = ['Never', 'Always'];

  function addLikertAgree(questionText, code) {
    form.addScaleItem()
      .setTitle(code + ': ' + questionText)
      .setBounds(1, 5)
      .setLabels(scaleAgreeLabels[0], scaleAgreeLabels[1])
      .setRequired(true);
  }

  function addLikertFrequency(questionText, code) {
    form.addScaleItem()
      .setTitle(code + ': ' + questionText)
      .setBounds(1, 5)
      .setLabels(scaleFrequencyLabels[0], scaleFrequencyLabels[1])
      .setRequired(true);
  }

  // =====================================================
  // SECTION 0: DEMOGRAPHICS (5 items)
  // =====================================================
  form.addPageBreakItem().setTitle('Section 0: About you');

  form.addMultipleChoiceItem()
    .setTitle('A1 / GEN: Gender (1=Male, 2=Female, 3=Other, 4=Prefer not to say)')
    .setChoiceValues(['1 - Male', '2 - Female', '3 - Other', '4 - Prefer not to say'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('A2 / AGE: Age')
    .setChoiceValues(['1 - Under 20', '2 - 20–25', '3 - 26 and above'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('A3 / MAJ: Academic Major')
    .setChoiceValues(['1 - IT/Computer Science', '2 - Non-IT Related (e.g., Humanities, Management)'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('A4 / YEAR: Academic Year')
    .setChoiceValues(['1 - 1st', '2 - 2nd', '3 - 3rd', '4 - 4th', '5 - Post-graduate'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('A5 / DEVICE: How do you go online? (Select all that apply)')
    .setChoiceValues(['Smartphone', 'Laptop', 'Tablet', 'Desktop'])
    .setRequired(true);

  // =====================================================
  // SECTION 1: Awareness & knowledge (B1–B7)
  // =====================================================
  form.addPageBreakItem().setTitle('Section 1: Cybersecurity awareness');

  const section1 = [
    'I know my phone or computer can get viruses or harmful software.',
    'I know phishing is dangerous.',
    "I am aware that 'https' is safer than 'http' in a website address.",
    'I know Nepal has an online safety law (Electronic Transactions Act).',
    'I am concerned about using open public Wi-Fi.',
    'I know that careless use of the internet can put my personal information at risk.',
    'I give high priority to using my phone or computer securely.'
  ];

  section1.forEach((q, i) => addLikertAgree(q, 'B' + (i + 1)));

  // =====================================================
  // SECTION 2: Digital behaviour (C1–C7)
  // =====================================================
  form.addPageBreakItem().setTitle('Section 2: Online habits (how true is this for you?)');

  const section2 = [
    'I use one password for many accounts.',
    'I open links in emails from people I do not know.',
    'I use public Wi-Fi for banking or private work without extra protection.',
    'I download from websites I do not trust.',
    'I post my location or personal photos openly on social media.',
    'I click pop-up ads while browsing.',
    'I accept friend or chat requests from strangers online.'
  ];

  section2.forEach((q, i) => addLikertAgree(q, 'C' + (i + 1)));

  // =====================================================
  // SECTION 3: Risk mitigation (D1–D7) — Never → Always
  // =====================================================
  form.addPageBreakItem().setTitle('Section 3: Safe practices (how often?)');

  const section3 = [
    'I update security or antivirus on my devices.',
    'I check for a lock sign before I enter passwords or card details.',
    'I change my passwords from time to time.',
    'I log out when I finish on a shared or public device.',
    'I turn on two-factor authentication for important accounts when it is offered.',
    'I back up important files to another drive or cloud storage.',
    'I check who sent an email before I open links or attachments.'
  ];

  section3.forEach((q, i) => addLikertFrequency(q, 'D' + (i + 1)));

  // =====================================================
  // SECTION 4: Attitudes & influencing factors (E1–E7)
  // =====================================================
  form.addPageBreakItem().setTitle('Section 4: Your views');

  const section4 = [
    'If hackers took my data, it would be a big problem for me.',
    'I can deal with common online dangers.',
    'Safe internet habits are important in my daily life.',
    'I would know where to report an online crime.',
    'Strong passwords are hard for me to make and remember.',
    'My university has prepared me enough for cyber risks.',
    'If another student told me about a breach, I would be more careful.'
  ];

  section4.forEach((q, i) => addLikertAgree(q, 'E' + (i + 1)));

  // =====================================================
  // THANK YOU SECTION
  // =====================================================
  form.addSectionHeaderItem()
    .setTitle('Thank You')
    .setHelpText(
      'Thank you for completing this survey. Your responses will contribute to the research findings.'
    );

  Logger.log('Form Created: ' + form.getPublishedUrl());
  Logger.log('Form Edit URL: ' + form.getEditUrl());
}
