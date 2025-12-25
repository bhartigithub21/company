import { Monitor, Activity, Server, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';


 export const sections = [
    {
      id: 'cms',
      title: 'College Management System (CMS)',
      icon: <Monitor size={40} />,
      color: '#00f0ff',
      desc: 'A comprehensive platform to automate academic and administrative operations, ensuring seamless campus management.',
      features: [
        'Automated Admission & Enrollment',
        'Student Information System (SIS)',
        'Examination & Result Processing',
        'Fee Collection & Finance Management',
        'Library & Hostel Management',
        'Alumni Network Portal'
      ]
    },
    {
      id: 'hms',
      title: 'Hospital Management System (HMS)',
      icon: <Activity size={40} />,
      color: '#7000ff',
      desc: 'Integrated healthcare solutions designed to streamline hospital workflows, patient care, and medical records.',
      features: [
        'OPD & IPD Management',
        'Electronic Health Records (EHR)',
        'Pharmacy & Inventory Control',
        'Lab & Radiology Information System',
        'Doctor Scheduling & Appointments',
        'Billing & Insurance Claims'
      ]
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      icon: <Server size={40} />,
      color: '#00d2ff',
      desc: 'Unified resource planning tools to optimize business processes, drive efficiency, and support data-driven decisions.',
      features: [
        'Financial Management & Accounting',
        'Human Resource Management (HRM)',
        'Supply Chain & Procurement',
        'Customer Relationship Management (CRM)',
        'Asset & Facility Management',
        'Business Intelligence & Reporting'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: <Smartphone size={40} />,
      color: '#ff00d2',
      desc: 'Custom native and cross-platform mobile applications tailored to extend your digital reach and engagement.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Solutions (Flutter/React Native)',
        'Secure Payment Gateways',
        'Real-time Notifications & Alerts',
        'Offline Functionality',
        'User-Centric UI/UX Design'
      ]
    }
  ];