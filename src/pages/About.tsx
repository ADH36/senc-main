import { Users, Target, Eye, Heart, Award, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
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

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in technology and business strategy.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20executive%20portrait%20confident%20leader%20modern%20office%20setting&image_size=square'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Expert in AI and machine learning with a passion for innovative solutions.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=female%20technology%20executive%20professional%20portrait%20modern%20tech%20background&image_size=square'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product Design',
      bio: 'Creative director specializing in user experience and product innovation.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20director%20professional%20portrait%20design%20studio%20background&image_size=square'
    },
    {
      name: 'Emily Davis',
      role: 'VP of Engineering',
      bio: 'Engineering leader focused on scalable architecture and team development.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=female%20engineering%20leader%20professional%20portrait%20technology%20workspace&image_size=square'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SENC
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are a technology company dedicated to creating innovative solutions that transform industries and empower businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-cyan-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses and individuals with cutting-edge technology solutions that drive innovation, enhance productivity, and create meaningful impact across diverse industries.
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-cyan-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in technology innovation, creating a future where advanced solutions seamlessly integrate into everyday life and business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide our decisions and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our founding to today, here are the key milestones that have shaped SENC.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-cyan-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind SENC's innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;