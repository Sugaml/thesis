function createCybersecurityAwarenessForm() {
    const form = FormApp.create('Cybersecurity Awareness, Digital Behaviour, and Risk Mitigation Survey');
  
    form.setDescription(
      'This survey is for academic purposes as part of a Master’s Degree research project. ' +
      'Please provide honest and truthful responses. Your answers will remain confidential and will be used only for research purposes.\n\n' +
      'Estimated Time: 8–12 minutes\n\n' +
      '5-Point Likert Scale:\n' +
      '1 = Strongly Disagree\n' +
      '2 = Disagree\n' +
      '3 = Neutral\n' +
      '4 = Agree\n' +
      '5 = Strongly Agree\n\n' +
      'Thank you for your valuable participation.\n\n' +
      'Your honest answers will help produce better research findings and more accurate outcomes.'
    );
  
    const scaleLabels = ['Strongly Disagree', 'Strongly Agree'];
  
    function addLikertQuestion(questionText, code) {
      form.addScaleItem()
        .setTitle(code + ': ' + questionText)
        .setBounds(1, 5)
        .setLabels(scaleLabels[0], scaleLabels[1])
        .setRequired(true);
    }
  
    // =====================================================
    // SECTION 0: DEMOGRAPHIC PROFILE (WITH SPSS CODES)
    // =====================================================
    form.addPageBreakItem().setTitle('Section 0: Demographic Profile');
  
    form.addMultipleChoiceItem()
      .setTitle('GEN: Gender (1=Male, 2=Female, 3=Other)')
      .setChoiceValues(['1 - Male', '2 - Female', '3 - Other'])
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('AGE: Age Group')
      .setChoiceValues(['1 - Under 20', '2 - 20–25', '3 - 26 and above'])
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('MAJ: Academic Major')
      .setChoiceValues(['1 - IT/Computer Science', '2 - Non-IT Related'])
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('YEAR: Academic Year')
      .setChoiceValues(['1 - 1st', '2 - 2nd', '3 - 3rd', '4 - 4th', '5 - Post-graduate'])
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('LEVEL: Academic Level')
      .setChoiceValues(['1 - Bachelor', '2 - Master', '3 - MPhil', '4 - PhD'])
      .setRequired(true);
  
    form.addTextItem()
      .setTitle('UNI: University Name')
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('SKILL: Perceived Computer Skill Level')
      .setChoiceValues(['1 - Beginner', '2 - Intermediate', '3 - Advanced'])
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('NETUSE: Average Daily Internet Usage')
      .setChoiceValues(['1 - < 2 hrs', '2 - 2–5 hrs', '3 - 6–10 hrs', '4 - > 10 hrs'])
      .setRequired(true);
  
    form.addMultipleChoiceItem()
      .setTitle('DEVICE: Primary Access Device')
      .setChoiceValues(['1 - Smartphone', '2 - Laptop', '3 - Tablet', '4 - Desktop'])
      .setRequired(true);
  
    // =====================================================
    // SECTION 1: Cybersecurity Awareness & Knowledge
    // =====================================================
    form.addPageBreakItem().setTitle('Section 1: Cybersecurity Awareness & Knowledge');
  
    const section1 = [
      'I am aware of the general Information Security and Malware concepts.',
      'I know that using HTTPS is more secure than HTTP in a URL address.',
      'I am familiar with the potential types of viruses and malware that can affect my digital devices.',
      'I understand that sending sensitive information without encryption can lead to data breaches.',
      'I can identify online scams such as phishing and social engineering attempts.',
      'I am aware of the legal remedies and policies provided in Nepal’s Electronic Transactions Act (ETA 2063).',
      'I believe cybersecurity is a shared responsibility between individuals and institutions.',
      'I know how to check privacy and security settings of mobile applications.',
      'I am aware of the consequences of using copyright-protected work without permission.',
      'I understand that regular software and antivirus updates are necessary.'
    ];
  
    section1.forEach((q, i) => addLikertQuestion(q, 'AW' + (i + 1)));
  
    // =====================================================
    // SECTION 2: Digital Behaviour Patterns
    // =====================================================
    form.addPageBreakItem().setTitle('Section 2: Digital Behaviour Patterns');
  
    const section2 = [
      'It is acceptable to post personal pictures publicly on social media.',
      'I am comfortable sharing my current location publicly on social media.',
      'I often use the same password across multiple accounts for convenience.',
      'I am willing to open attachments from strangers if the subject is interesting.',
      'I use public Wi-Fi for personal work without a VPN.',
      'I often download free software, music, or films from unverified websites.',
      'I am willing to click pop-up advertisements while browsing.',
      'I tend to reuse passwords from previous accounts.',
      'I am comfortable accepting friend requests from unknown people online.',
      'I find it easy to share login credentials with trusted people.',
      'I leave my devices logged in and unattended in public places.',
      'I communicate with strangers using webcam or video chat without verification.'
    ];
  
    section2.forEach((q, i) => addLikertQuestion(q, 'DB' + (i + 1)));
  
    // =====================================================
    // SECTION 3: Risk Mitigation Practices
    // =====================================================
    form.addPageBreakItem().setTitle('Section 3: Risk Mitigation Practices');
  
    const section3 = [
      'I regularly install antivirus updates on my devices.',
      'I verify website security (padlock icon) before entering personal information.',
      'I apply operating system security patches as soon as available.',
      'I use two-factor authentication (2FA) for important accounts.',
      'I log out of social media and email accounts after use.',
      'I periodically change passwords for my online accounts.',
      'I regularly back up important data securely.',
      'I delete browser history regularly to remove suspicious activity.',
      'I avoid installing browser extensions from untrusted websites.',
      'I prefer internet banking and shopping only on personal devices.',
      'I use complex passwords with letters, numbers, and symbols.',
      'I verify sender identity before opening links or attachments.'
    ];
  
    section3.forEach((q, i) => addLikertQuestion(q, 'RM' + (i + 1)));
  
    // =====================================================
    // SECTION 4: Influencing Factors & Attitudes
    // =====================================================
    form.addPageBreakItem().setTitle('Section 4: Influencing Factors & Attitudes');
  
    const section4 = [
      'Losing my personal information in a cyberattack would be a very serious problem for me.',
      'I am confident in my ability to identify and handle cybersecurity threats.',
      'Adopting strict cybersecurity practices is essential for personal safety.',
      'Hearing about a breach from another student would make me more careful.',
      'Creating and remembering complex passwords is difficult for me.',
      'I believe my university has adequately prepared me for cyber threats.',
      'Formal cybersecurity training has improved my secure online behavior.',
      'I have experienced or know someone close who experienced cybercrime.',
      'If I noticed a security incident, I would know where to report it.'
    ];
  
    section4.forEach((q, i) => addLikertQuestion(q, 'IF' + (i + 1)));
  
    // =====================================================
    // THANK YOU SECTION
    // =====================================================
    form.addSectionHeaderItem()
      .setTitle('Thank You')
      .setHelpText(
        'Thank you for completing this survey. Your honest response will contribute to better research findings.'
      );
  
    Logger.log('Form Created: ' + form.getPublishedUrl());
    Logger.log('Form Edit URL: ' + form.getEditUrl());
  }