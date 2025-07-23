import { motion } from 'framer-motion';
import { Users, Target, Eye, Heart, Award, Globe, Zap, Shield, Star, Trophy, Play, Video, Building, Search, Filter, Mail, Linkedin } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create groundbreaking solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security and privacy are at the core of everything we build and deliver.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We strive for excellence in every project and maintain the highest standards.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'SENC was established with a vision to transform industries through innovative technology solutions.'
    },
    {
      year: '2021',
      title: 'First Product Launch',
      description: 'Launched our first esports platform, revolutionizing competitive gaming communities.'
    },
    {
      year: '2022',
      title: 'AI Division Expansion',
      description: 'Expanded into artificial intelligence with cutting-edge machine learning solutions.'
    },
    {
      year: '2023',
      title: 'Creative Services Launch',
      description: 'Introduced SENC Creatives, offering professional design and branding services.'
    },
    {
      year: '2024',
      title: 'Financial Technology',
      description: 'Launched XenPe payment solutions, entering the fintech market with secure payment processing.'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Teams' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'CEO & Founder',
      department: 'leadership',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20CEO%20headshot%20business%20suit%20confident%20smile%20modern%20office%20background&image_size=square',
      bio: 'Visionary leader with 15+ years in tech innovation',
      email: 'alex.chen@senc.in',
      linkedin: 'https://linkedin.com/in/alexchen',
      skills: ['Leadership', 'Strategy', 'Innovation']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'CTO',
      department: 'leadership',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20CTO%20headshot%20business%20attire%20confident%20tech%20background&image_size=square',
      bio: 'Expert in AI and machine learning technologies',
      email: 'sarah.johnson@senc.in',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      skills: ['AI/ML', 'Architecture', 'Team Building']
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Head of Design',
      department: 'design',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20hispanic%20male%20designer%20headshot%20creative%20modern%20workspace%20background&image_size=square',
      bio: 'Creative director with passion for user experience',
      email: 'michael.rodriguez@senc.in',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      skills: ['UI/UX', 'Branding', 'Creative Direction']
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'VP of Marketing',
      department: 'marketing',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20marketing%20executive%20headshot%20business%20casual%20modern%20office&image_size=square',
      bio: 'Strategic marketer driving global brand growth',
      email: 'emily.davis@senc.in',
      linkedin: 'https://linkedin.com/in/emilydavis',
      skills: ['Digital Marketing', 'Brand Strategy', 'Growth']
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Senior Software Engineer',
      department: 'engineering',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20software%20engineer%20headshot%20casual%20tech%20workspace&image_size=square',
      bio: 'Full-stack developer specializing in scalable systems',
      email: 'david.kim@senc.in',
      linkedin: 'https://linkedin.com/in/davidkim',
      skills: ['React', 'Node.js', 'Cloud Architecture']
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Sales Director',
      department: 'sales',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20sales%20director%20headshot%20business%20attire%20confident%20smile&image_size=square',
      bio: 'Results-driven sales leader with enterprise focus',
      email: 'lisa.thompson@senc.in',
      linkedin: 'https://linkedin.com/in/lisathompson',
      skills: ['Enterprise Sales', 'Relationship Building', 'Negotiation']
    }
  ];

  const cultureVideos = [
    {
      id: 1,
      title: 'Our Company Culture',
      description: 'Discover what makes SENC a great place to work',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20space%20diverse%20team%20collaboration%20meeting%20room%20professional%20environment&image_size=landscape_16_9',
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Innovation at SENC',
      description: 'How we foster creativity and breakthrough thinking',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=tech%20innovation%20lab%20brainstorming%20session%20whiteboard%20creative%20workspace&image_size=landscape_16_9',
      duration: '4:20'
    },
    {
      id: 3,
      title: 'Work-Life Balance',
      description: 'Supporting our team\'s well-being and growth',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=office%20wellness%20area%20relaxation%20space%20team%20activities%20work%20life%20balance&image_size=landscape_16_9',
      duration: '2:30'
    }
  ];

  const filteredTeamMembers = teamMembers.filter(member => {
    const departmentMatch = selectedDepartment === 'all' || member.department === selectedDepartment;
    const searchMatch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return departmentMatch && searchMatch;
  });

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-800 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-32 h-32 border border-cyan-400/30 rounded-full"
          />
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 w-4 h-4 bg-cyan-400/50 rounded-full blur-sm"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">SENC</span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-gray-300 max-w-3xl mx-auto">
              We are a technology company dedicated to creating innovative solutions that transform industries and empower businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 group flex items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="h-8 w-8 text-cyan-600 mr-3" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-blue-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses and individuals with cutting-edge technology solutions that drive innovation, enhance productivity, and create meaningful impact across diverse industries.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 group flex items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Eye className="h-8 w-8 text-cyan-600 mr-3" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-blue-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the global leader in technology innovation, creating a future where advanced solutions seamlessly integrate into everyday life and business operations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, number: '50K+', label: 'Active Users', color: 'from-blue-500 to-cyan-500' },
              { icon: Trophy, number: '200+', label: 'Projects Completed', color: 'from-yellow-500 to-orange-500' },
              { icon: Globe, number: '50+', label: 'Countries Served', color: 'from-green-500 to-emerald-500' },
              { icon: Star, number: '99.9%', label: 'Uptime', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="text-center group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-4 shadow-glow`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These fundamental principles guide our decisions and shape our company culture.
            </p>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-card p-6 text-center group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-900 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow"
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Company Culture Videos */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Culture in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get an inside look at what makes SENC a unique and inspiring place to work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cultureVideos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Virtual Office Tour */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <Building className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Take a Virtual Office Tour</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Explore our modern workspace, innovation labs, and collaborative spaces from anywhere in the world
              </p>
              <button
                onClick={() => setShowVirtualTour(true)}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <Video className="w-5 h-5" />
                Start Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From our founding to today, here are the key milestones that have shaped SENC.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-200 dark:bg-cyan-800"></div>
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 px-8">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-cyan-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                  ></motion.div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Team Directory */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Interactive Team Directory</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know the brilliant minds behind SENC's innovative solutions
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, role, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Filter by department:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredTeamMembers.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No team members found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;