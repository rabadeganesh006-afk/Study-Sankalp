export type TopicStatus =
  "Not Started" | "Learning" | "Revision" | "PYQ Done" | "Weak" | "Completed"

export type SyllabusTopic = {
  id: string
  name: string
}

export type SyllabusChapter = {
  id: string
  name: string
  topics: SyllabusTopic[]
}

export type SyllabusSubject = {
  id: string
  name: string
  group?: string
  chapters: SyllabusChapter[]
}

export type TopicProgressMap = Record<string, TopicStatus>

export const builtInSyllabus: SyllabusSubject[] = [
  {
    id: "physics",
    name: "Physics",
    chapters: [
      {
        id: "physics-units-and-dimension",
        name: "Units and Dimension",
        topics: [
          {
            id: "physics-units-and-dimension-introduction",
            name: "Introduction",
          },
          {
            id: "physics-units-and-dimension-physical-quantities",
            name: "Physical Quantities",
          },
          {
            id: "physics-units-and-dimension-system-of-units",
            name: "System of Units",
          },
          {
            id: "physics-units-and-dimension-dimensions-of-physical-quantities",
            name: "Dimensions of Physical Quantities",
          },
          {
            id: "physics-units-and-dimension-dimensional-constants-dimensional-variables",
            name: "Dimensional Constants Dimensional Variables",
          },
          {
            id: "physics-units-and-dimension-non-dimensional-constants-non-dimensional-variables",
            name: "Non Dimensional Constants Non Dimensional Variables",
          },
          {
            id: "physics-units-and-dimension-dimensional-analysis-and-its-applications",
            name: "Dimensional Analysis and its Applications",
          },
          {
            id: "physics-units-and-dimension-application-of-dimension",
            name: "Application Of Dimension",
          },
        ],
      },
      {
        id: "physics-mathematical-tools",
        name: "Mathematical Tools",
        topics: [
          {
            id: "physics-mathematical-tools-basic-maths-1",
            name: "Basic Maths-1",
          },
          {
            id: "physics-mathematical-tools-basic-maths-2",
            name: "Basic Maths-2",
          },
        ],
      },
      {
        id: "physics-vectors",
        name: "Vectors",
        topics: [
          {
            id: "physics-vectors-definition-and-type-of-vector-angle-between-vectors",
            name: "Definition & type of vector, Angle between vectors",
          },
          {
            id: "physics-vectors-addition-of-vectors-including-both-laws",
            name: "Addition of vectors, including both laws",
          },
          {
            id: "physics-vectors-subtraction-of-vector-and-question-practice",
            name: "Subtraction of vector & question Practice",
          },
          {
            id: "physics-vectors-polygon-rule-of-vector-addition",
            name: "Polygon rule of vector addition",
          },
          {
            id: "physics-vectors-component-of-vector-definition-of-unit-vector-and-representation-of-a",
            name: "Component of vector, definition of unit vector & representation of a vector in form",
          },
          {
            id: "physics-vectors-general-representation-of-a-vector-in-2-d-and-3d-position",
            name: "General representation of a vector in 2- D & 3D, Position",
          },
          {
            id: "physics-vectors-vector-displacement-average-velocity",
            name: "vector,displacement, average velocity",
          },
          {
            id: "physics-vectors-scalar-product-and-its-application",
            name: "Scalar product and its application",
          },
        ],
      },
      {
        id: "physics-motion-in-a-straight-line",
        name: "Motion in a Straight Line",
        topics: [
          {
            id: "physics-motion-in-a-straight-line-introduction",
            name: "Introduction",
          },
          {
            id: "physics-motion-in-a-straight-line-concept-of-position-path-length-distance-displacement",
            name: "Concept of position, path length (distance), displacement",
          },
          {
            id: "physics-motion-in-a-straight-line-speed",
            name: "Speed",
          },
          {
            id: "physics-motion-in-a-straight-line-velocity",
            name: "Velocity",
          },
          {
            id: "physics-motion-in-a-straight-line-acceleration",
            name: "Acceleration",
          },
          {
            id: "physics-motion-in-a-straight-line-graphs",
            name: "Graphs",
          },
          {
            id: "physics-motion-in-a-straight-line-motion-with-constant-acceleration-uniformly-acceleration-motion",
            name: "Motion with constant acceleration (uniformly acceleration motion)",
          },
          {
            id: "physics-motion-in-a-straight-line-motion-with-variable-acceleration",
            name: "Motion with variable acceleration",
          },
        ],
      },
      {
        id: "physics-motion-in-a-plane",
        name: "Motion in a Plane",
        topics: [
          {
            id: "physics-motion-in-a-plane-projectile-motion",
            name: "Projectile Motion",
          },
          {
            id: "physics-motion-in-a-plane-relative-motion",
            name: "Relative Motion",
          },
          {
            id: "physics-motion-in-a-plane-rain-river-boat",
            name: "Rain-River Boat",
          },
        ],
      },
      {
        id: "physics-laws-of-motion",
        name: "Laws of Motion",
        topics: [
          {
            id: "physics-laws-of-motion-laws-and-types-of-force",
            name: "laws & types of force",
          },
          {
            id: "physics-laws-of-motion-f-b-d-and-application-of-nlm",
            name: "F.B.D. & Application of NLM",
          },
          {
            id: "physics-laws-of-motion-atwood-machine-pulley-related-two-or-more-blocks-in-contact",
            name: "Atwood machine (pulley related), two or more blocks in contact",
          },
          {
            id: "physics-laws-of-motion-elevator-problems-and-spring-problem-simple",
            name: "Elevator problems & spring problem/simple",
          },
          {
            id: "physics-laws-of-motion-cutting-of-spring",
            name: "Cutting of spring",
          },
          {
            id: "physics-laws-of-motion-pseudo-force",
            name: "pseudo force",
          },
          {
            id: "physics-laws-of-motion-constraint-motion",
            name: "Constraint motion",
          },
        ],
      },
      {
        id: "physics-friction",
        name: "Friction",
        topics: [
          {
            id: "physics-friction-introduction-static-and-kinetic-friction",
            name: "Introduction static & kinetic friction",
          },
          {
            id: "physics-friction-single-block-horizontal-surface-and-inclined-plan",
            name: "Single block horizontal surface & inclined plan",
          },
          {
            id: "physics-friction-angle-of-repose-net-contact-force-and-angle-of-friction",
            name: "Angle of repose, Net contact force & angle of friction",
          },
          {
            id: "physics-friction-two-block-problems",
            name: "Two block problems",
          },
        ],
      },
      {
        id: "physics-circular-motion",
        name: "Circular Motion",
        topics: [
          {
            id: "physics-circular-motion-centripetal-acceleration",
            name: "Centripetal Acceleration",
          },
          {
            id: "physics-circular-motion-tangential-acceleration",
            name: "Tangential Acceleration",
          },
          {
            id: "physics-circular-motion-dynamics-of-circular-motion",
            name: "Dynamics of Circular Motion",
          },
          {
            id: "physics-circular-motion-banking-of-road-conical-pendulum",
            name: "Banking of Road Conical pendulum",
          },
        ],
      },
      {
        id: "physics-work-energy-and-power",
        name: "Work, Energy and Power",
        topics: [
          {
            id: "physics-work-energy-and-power-work",
            name: "Work",
          },
          {
            id: "physics-work-energy-and-power-energy",
            name: "Energy",
          },
          {
            id: "physics-work-energy-and-power-power",
            name: "Power",
          },
          {
            id: "physics-work-energy-and-power-circular-motion",
            name: "Circular Motion",
          },
        ],
      },
      {
        id: "physics-centre-of-mass-and-system-of-particles",
        name: "Centre of Mass & System of Particles",
        topics: [
          {
            id: "physics-centre-of-mass-and-system-of-particles-com",
            name: "COM",
          },
          {
            id: "physics-centre-of-mass-and-system-of-particles-collision",
            name: "Collision",
          },
        ],
      },
      {
        id: "physics-rotational-motion",
        name: "Rotational Motion",
        topics: [
          {
            id: "physics-rotational-motion-rotational-kinematics",
            name: "Rotational Kinematics",
          },
          {
            id: "physics-rotational-motion-moment-of-inertia",
            name: "Moment of Inertia",
          },
          {
            id: "physics-rotational-motion-torque",
            name: "Torque",
          },
          {
            id: "physics-rotational-motion-kinetic-energy",
            name: "Kinetic Energy",
          },
          {
            id: "physics-rotational-motion-fixed-axis-rotation",
            name: "Fixed axis rotation",
          },
          {
            id: "physics-rotational-motion-angular-momentum",
            name: "Angular momentum",
          },
          {
            id: "physics-rotational-motion-combined-rotation-and-translation",
            name: "Combined rotation and translation",
          },
          {
            id: "physics-rotational-motion-impulsive-torque",
            name: "Impulsive torque",
          },
          {
            id: "physics-rotational-motion-toppling",
            name: "Toppling",
          },
        ],
      },
      {
        id: "physics-oscillations",
        name: "Oscillations",
        topics: [
          {
            id: "physics-oscillations-definitions",
            name: "Definitions",
          },
          {
            id: "physics-oscillations-equation-of-s-h-m-and-introduction-of-planar",
            name: "Equation of S.H.M. & Introduction of Planar",
          },
          {
            id: "physics-oscillations-energy-in-s-h-m-and-application-of-planar",
            name: "Energy in S.H.M. & Application of planar",
          },
          {
            id: "physics-oscillations-dynamics-of-s-h-m-and-find-time-period",
            name: "Dynamics of S.H.M. & find time period",
          },
          {
            id: "physics-oscillations-spring-block-system-and-incomplete-s-h-m",
            name: "Spring block system & incomplete S.H. M",
          },
          {
            id: "physics-oscillations-simple-pendulum-and-compound-pendulum",
            name: "Simple pendulum & Compound pendulum",
          },
          {
            id: "physics-oscillations-torsional-pendulum-and-coupled-oscillation",
            name: "Torsional pendulum & Coupled oscillation",
          },
        ],
      },
      {
        id: "physics-thermal-properties-of-matter",
        name: "Thermal Properties of Matter",
        topics: [
          {
            id: "physics-thermal-properties-of-matter-thermal-expansion",
            name: "Thermal Expansion",
          },
          {
            id: "physics-thermal-properties-of-matter-calorimetry",
            name: "calorimetry",
          },
          {
            id: "physics-thermal-properties-of-matter-heat-transfer",
            name: "Heat Transfer",
          },
          {
            id: "physics-thermal-properties-of-matter-conduction",
            name: "(Conduction)",
          },
        ],
      },
      {
        id: "physics-mechanical-properties-of-solids",
        name: "Mechanical Properties of Solids",
        topics: [
          {
            id: "physics-mechanical-properties-of-solids-introduction-stress-and-strain-hooke-s-law-stress-strain-curve-types-o",
            name: "Introduction Stress And Strain Hooke'S Law Stress-strain Curve Types of Elasticity Coefficients (Elastic Moduli)",
          },
          {
            id: "physics-mechanical-properties-of-solids-elastic-moduli-types-of-elasticity-coefficients-elastic-moduli-elastic",
            name: "Elastic Moduli Types of Elasticity Coefficients (Elastic Moduli) Elastic Moduli",
          },
        ],
      },
      {
        id: "physics-mechanical-properties-of-fluids",
        name: "Mechanical Properties of Fluids",
        topics: [
          {
            id: "physics-mechanical-properties-of-fluids-applications-of-elastic-behaviour-of-materials-introduction-pressure-v",
            name: "Applications Of Elastic Behaviour Of Materials, Introduction, Pressure, Variation of pressure with height",
          },
          {
            id: "physics-mechanical-properties-of-fluids-toricelli-s-experiment-pascal-law-archimedes-principle",
            name: "toricelli;s experiment Pascal Law Archimedes Principle",
          },
          {
            id: "physics-mechanical-properties-of-fluids-variation-of-pressure-inside-liquid-in-accelerated-containers",
            name: "variation of pressure inside liquid in accelerated containers",
          },
          {
            id: "physics-mechanical-properties-of-fluids-shape-of-free-surface-of-liquid-present-in-rotating-container",
            name: "shape of free surface of liquid present in rotating container",
          },
          {
            id: "physics-mechanical-properties-of-fluids-torricelli-s-experiment",
            name: "torricelli's experiment",
          },
          {
            id: "physics-mechanical-properties-of-fluids-pascal-law",
            name: "Pascal Law",
          },
          {
            id: "physics-mechanical-properties-of-fluids-archimedes-principle",
            name: "Archimedes Principle",
          },
          {
            id: "physics-mechanical-properties-of-fluids-streamline-flow",
            name: "Streamline Flow",
          },
          {
            id: "physics-mechanical-properties-of-fluids-bernoulli-s-principle-applications-of-bernoulli-s-theorem",
            name: "Bernoulli's Principle(Applications Of Bernoulli's Theorem)",
          },
          {
            id: "physics-mechanical-properties-of-fluids-surface-tension",
            name: "SURFACE TENSION",
          },
        ],
      },
      {
        id: "physics-thermodynamics",
        name: "Thermodynamics",
        topics: [
          {
            id: "physics-thermodynamics-thermodynamic-system",
            name: "Thermodynamic System",
          },
          {
            id: "physics-thermodynamics-reversible-and-irreversible-process",
            name: "Reversible and irreversible Process",
          },
          {
            id: "physics-thermodynamics-first-law-of-thermodynamics-second-law-of-thermodynamics",
            name: "First Law of Thermodynamics Second Law of Thermodynamics",
          },
        ],
      },
      {
        id: "physics-waves",
        name: "Waves",
        topics: [
          {
            id: "physics-waves-travelling-waves",
            name: "Travelling Waves",
          },
          {
            id: "physics-waves-wave-function",
            name: "Wave function",
          },
          {
            id: "physics-waves-superposition-and-interference",
            name: "Superposition and interference",
          },
          {
            id: "physics-waves-superposition-and-reflection",
            name: "Superposition & Reflection",
          },
          {
            id: "physics-waves-standing-waves",
            name: "Standing Waves",
          },
        ],
      },
      {
        id: "physics-gravitation",
        name: "Gravitation",
        topics: [
          {
            id: "physics-gravitation-force-field-potential-energy-variation-of-g",
            name: "Force/Field/Potential/Energy. Variation of g",
          },
          {
            id: "physics-gravitation-force-field-potential-energy-variation-of-g-2",
            name: "Force/Field,'PotentiaL Energy, Variation of g",
          },
          {
            id: "physics-gravitation-escape-velocity",
            name: "Escape velocity",
          },
          {
            id: "physics-gravitation-circular-orbits-kepler-s-laws-brief-only-statements",
            name: "circular orbits, Kepler's laws (Brief only statements",
          },
          {
            id: "physics-gravitation-circular-orbits-kepler-s-laws-brief-only-statements-2",
            name: "circular orbits. Kepler's laws (Brief only statements",
          },
        ],
      },
      {
        id: "physics-errors-and-measurements",
        name: "Errors and Measurements",
        topics: [
          {
            id: "physics-errors-and-measurements-vernier-calliper",
            name: "Vernier Calliper",
          },
          {
            id: "physics-errors-and-measurements-screw-gauge",
            name: "Screw gauge",
          },
        ],
      },
      {
        id: "physics-electrostatics",
        name: "Electrostatics",
        topics: [
          {
            id: "physics-electrostatics-introduction",
            name: "Introduction",
          },
          {
            id: "physics-electrostatics-charge",
            name: "Charge",
          },
          {
            id: "physics-electrostatics-coulomb-s-law",
            name: "Coulomb's Law",
          },
          {
            id: "physics-electrostatics-electric-field",
            name: "Electric Field",
          },
          {
            id: "physics-electrostatics-conductors-and-insulators",
            name: "Conductors and Insulators",
          },
          {
            id: "physics-electrostatics-electric-field-of-a-continuous-charge-distribution",
            name: "Electric Field of a Continuous Charge Distribution",
          },
          {
            id: "physics-electrostatics-motion-of-a-charged-particle-in-uniform-electric-field",
            name: "Motion of a Charged Particle in Uniform Electric Field",
          },
          {
            id: "physics-electrostatics-electric-field-lines",
            name: "Electric Field Lines",
          },
          {
            id: "physics-electrostatics-electric-flux",
            name: "Electric Flux",
          },
          {
            id: "physics-electrostatics-gauss-law",
            name: "Gauss Law",
          },
          {
            id: "physics-electrostatics-application-of-gauss-s-law",
            name: "Application of gauss's law",
          },
          {
            id: "physics-electrostatics-electric-dipole",
            name: "Electric Dipole",
          },
          {
            id: "physics-electrostatics-extra-lecture",
            name: "Extra Lecture",
          },
          {
            id: "physics-electrostatics-dipole-in-a-uniform-external-field",
            name: "Dipole in a Uniform External Field",
          },
          {
            id: "physics-electrostatics-dipole-in-a-uniform-external-field-short-dipole-in-non-uniform-electri",
            name: "Dipole in a Uniform External Field Short Dipole in Non-Uniform Electric Field",
          },
        ],
      },
      {
        id: "physics-electric-potential-and-dipole",
        name: "Electric potential and dipole",
        topics: [
          {
            id: "physics-electric-potential-and-dipole-electrostatic-potential-energy",
            name: "Electrostatic potential energy",
          },
          {
            id: "physics-electric-potential-and-dipole-potential-energy-calculations-for-system-of-charges",
            name: "Potential energy calculations for system of charges",
          },
          {
            id: "physics-electric-potential-and-dipole-relation-between-electric-field-e-and-electric-potential-v",
            name: "Relation between Electric field (E) & Electric potential (V)",
          },
          {
            id: "physics-electric-potential-and-dipole-equipotential-surface",
            name: "Equipotential Surface",
          },
          {
            id: "physics-electric-potential-and-dipole-electric-potential-due-to-dipole",
            name: "Electric potential due to dipole",
          },
          {
            id: "physics-electric-potential-and-dipole-introduction-to-conductors-in-electrostatics",
            name: "Introduction to Conductors in Electrostatics",
          },
          {
            id: "physics-electric-potential-and-dipole-electrostatics-of-conductor",
            name: "Electrostatics of Conductor",
          },
          {
            id: "physics-electric-potential-and-dipole-properties-of-conductors-in-electrostatic-equilibrium",
            name: "Properties of Conductors in Electrostatic Equilibrium",
          },
          {
            id: "physics-electric-potential-and-dipole-applications",
            name: "Applications",
          },
        ],
      },
      {
        id: "physics-current-electricity",
        name: "Current Electricity",
        topics: [
          {
            id: "physics-current-electricity-electric-current",
            name: "Electric Current",
          },
          {
            id: "physics-current-electricity-current-in-conductors",
            name: "Current in Conductors",
          },
          {
            id: "physics-current-electricity-kirchhoff-s-laws-and-combination-of-resistances",
            name: "Kirchhoff's Laws and Combination of Resistances",
          },
          {
            id: "physics-current-electricity-wheatstone-bridge-and-symmetric-circuits",
            name: "Wheatstone Bridge and Symmetric Circuits",
          },
          {
            id: "physics-current-electricity-heating-effect-of-current",
            name: "Heating Effect of Current",
          },
          {
            id: "physics-current-electricity-cells-and-combination-of-cells",
            name: "Cells and Combination of Cells",
          },
          {
            id: "physics-current-electricity-electrical-measuring-instruments",
            name: "Electrical Measuring Instruments",
          },
        ],
      },
      {
        id: "physics-capacitance",
        name: "Capacitance",
        topics: [
          {
            id: "physics-capacitance-introduction-to-capacitance",
            name: "Introduction to Capacitance",
          },
          {
            id: "physics-capacitance-capacitors-and-capacitance",
            name: "Capacitors and Capacitance",
          },
          {
            id: "physics-capacitance-combination-of-capacitors",
            name: "Combination of Capacitors",
          },
          {
            id: "physics-capacitance-dielectrics-and-polarization",
            name: "Dielectrics and Polarization",
          },
          {
            id: "physics-capacitance-conductor-and-its-capacitance",
            name: "Conductor & its capacitance",
          },
          {
            id: "physics-capacitance-charging-of-a-capacitor",
            name: "Charging of a capacitor",
          },
          {
            id: "physics-capacitance-variation-of-different-variables-when-dielectric-is-inserted-between-p",
            name: "Variation of different variables when dielectric is inserted between plates of capacitor",
          },
          {
            id: "physics-capacitance-redistribution-of-charge-when-two-or-more-capacitors-are-connected",
            name: "Redistribution of charge when two or more capacitors are connected",
          },
        ],
      },
      {
        id: "physics-moving-charges-and-magnetism",
        name: "Moving Charges and Magnetism",
        topics: [
          {
            id: "physics-moving-charges-and-magnetism-oersted-s-experiment-and-biot-savart-s-law",
            name: "Oersted's Experiment and Biot-Savart's Law",
          },
          {
            id: "physics-moving-charges-and-magnetism-b-field-due-to-a-current-carrying-ring-and-problems-on-combination-of",
            name: "B-field due to a current carrying Ring and Problems on combination of Ring and Rod",
          },
          {
            id: "physics-moving-charges-and-magnetism-ampere-s-law-and-its-applications",
            name: "Ampere's Law and Its applications",
          },
          {
            id: "physics-moving-charges-and-magnetism-force-on-a-moving-charge-in-a-magnetic-field",
            name: "Force on a moving charge in a Magnetic Field",
          },
          {
            id: "physics-moving-charges-and-magnetism-lorentz-force",
            name: "Lorentz force",
          },
          {
            id: "physics-moving-charges-and-magnetism-motion-of-a-charge-particle-in-presence-of-both-electric-and-magnetic",
            name: "Motion of a charge particle in presence of both Electric and magnetic field",
          },
          {
            id: "physics-moving-charges-and-magnetism-magnetic-force-on-a-current-carrying-conductor",
            name: "Magnetic force on a Current Carrying Conductor",
          },
          {
            id: "physics-moving-charges-and-magnetism-gyromagnetic-ratio-torque-on-a-current-carrying-loop",
            name: "Gyromagnetic Ratio,Torque on a Current carrying Loop",
          },
        ],
      },
      {
        id: "physics-magnetism-and-matter",
        name: "Magnetism and Matter",
        topics: [
          {
            id: "physics-magnetism-and-matter-bar-magnet-and-its-properties",
            name: "Bar Magnet and its Properties",
          },
          {
            id: "physics-magnetism-and-matter-oscillation-magnetometer",
            name: "Oscillation Magnetometer",
          },
          {
            id: "physics-magnetism-and-matter-classification-of-magnetic-materials-ferromagnetism-and-hysteresis-rec",
            name: "Classification of Magnetic Materials Ferromagnetism and Hysteresis (Record Lecture)",
          },
        ],
      },
      {
        id: "physics-electromagnetic-induction",
        name: "Electromagnetic Induction",
        topics: [
          {
            id: "physics-electromagnetic-induction-magnetic-flux-and-lenz-s-law",
            name: "Magnetic Flux and Lenz's Law",
          },
          {
            id: "physics-electromagnetic-induction-faraday-s-law",
            name: "Faraday's Law",
          },
          {
            id: "physics-electromagnetic-induction-calculation-of-induced-emf",
            name: "Calculation of Induced EMF",
          },
          {
            id: "physics-electromagnetic-induction-self-inductance",
            name: "Self Inductance",
          },
          {
            id: "physics-electromagnetic-induction-mutual-inductance",
            name: "Mutual Inductance",
          },
          {
            id: "physics-electromagnetic-induction-inductor-in-electrical-circuits",
            name: "Inductor in Electrical Circuits",
          },
          {
            id: "physics-electromagnetic-induction-induced-electric-field",
            name: "Induced Electric Field",
          },
        ],
      },
      {
        id: "physics-alternating-current",
        name: "Alternating Current",
        topics: [
          {
            id: "physics-alternating-current-introduction-to-alternating-current-average-and-rms-values",
            name: "Introduction to Alternating Current, Average and RMS Values",
          },
          {
            id: "physics-alternating-current-types-of-ac-circuits-power-and-power-factor",
            name: "Types of AC Circuits, Power & Power Factor",
          },
          {
            id: "physics-alternating-current-choke-coil-series-lcr-circuit-and-resonant-frequency",
            name: "Choke Coil,Series LCR Circuit and Resonant Frequency",
          },
          {
            id: "physics-alternating-current-lc-oscillations-and-transformer",
            name: "LC Oscillations and Transformer",
          },
        ],
      },
      {
        id: "physics-electromagnetic-waves",
        name: "Electromagnetic Waves",
        topics: [
          {
            id: "physics-electromagnetic-waves-characteristics-of-electromagnetic-waves",
            name: "Characteristics of Electromagnetic Waves",
          },
        ],
      },
      {
        id: "physics-ray-optics-and-optical-instruments",
        name: "Ray Optics and Optical Instruments",
        topics: [
          {
            id: "physics-ray-optics-and-optical-instruments-plane-mirrors",
            name: "Plane mirrors",
          },
          {
            id: "physics-ray-optics-and-optical-instruments-reflection-from-a-curved-surface",
            name: "Reflection From a Curved Surface",
          },
          {
            id: "physics-ray-optics-and-optical-instruments-refraction-of-light",
            name: "Refraction of Light",
          },
          {
            id: "physics-ray-optics-and-optical-instruments-prism",
            name: "Prism",
          },
          {
            id: "physics-ray-optics-and-optical-instruments-tir",
            name: "TIR",
          },
          {
            id: "physics-ray-optics-and-optical-instruments-refraction-from-spherical-surface",
            name: "Refraction from Spherical surface",
          },
          {
            id: "physics-ray-optics-and-optical-instruments-thin-lens",
            name: "Thin Lens",
          },
        ],
      },
      {
        id: "physics-wave-optics",
        name: "Wave Optics",
        topics: [
          {
            id: "physics-wave-optics-huygens-wave-theory",
            name: "Huygens' Wave Theory",
          },
          {
            id: "physics-wave-optics-interference-of-light",
            name: "Interference of light",
          },
          {
            id: "physics-wave-optics-ydse-and-fringe-visibility",
            name: "YDSE & Fringe Visibility",
          },
          {
            id: "physics-wave-optics-bichromatic-light-interference-and-optical-path-length",
            name: "Bichromatic light interference and Optical Path Length",
          },
          {
            id: "physics-wave-optics-fresnel-biprism-and-thin-film-interference",
            name: "Fresnel Biprism and Thin film interference",
          },
          {
            id: "physics-wave-optics-diffraction-and-power-of-resolution",
            name: "Diffraction and Power of Resolution",
          },
          {
            id: "physics-wave-optics-polarization-of-light-and-brewster-s-law",
            name: "Polarization of Light and Brewster's Law",
          },
          {
            id: "physics-wave-optics-scattering-and-doppler-effect-of-light",
            name: "Scattering and Doppler Effect of Light",
          },
        ],
      },
      {
        id: "physics-dual-nature-of-radiation-and-matter",
        name: "Dual Nature of Radiation and Matter",
        topics: [
          {
            id: "physics-dual-nature-of-radiation-and-matter-dual-nature-of-matter-and-waves",
            name: "Dual nature of matter and waves",
          },
          {
            id: "physics-dual-nature-of-radiation-and-matter-photoelectric-effect",
            name: "Photoelectric effect",
          },
        ],
      },
      {
        id: "physics-atoms",
        name: "Atoms",
        topics: [
          {
            id: "physics-atoms-atomic-models-bohr-s-model",
            name: "Atomic Models Bohr's Model",
          },
          {
            id: "physics-atoms-atomic-spectrum-hydrogen-spectra-and-atomic-collision-x-rays",
            name: "Atomic Spectrum Hydrogen Spectra & Atomic collision X-Rays",
          },
        ],
      },
      {
        id: "physics-nuclei",
        name: "Nuclei",
        topics: [
          {
            id: "physics-nuclei-introduction-to-nucleus",
            name: "Introduction to Nucleus",
          },
          {
            id: "physics-nuclei-radioactive-decay-radioactivity",
            name: "Radioactive Decay Radioactivity",
          },
          {
            id: "physics-nuclei-parallel-and-series-decay",
            name: "Parallel and Series Decay",
          },
        ],
      },
      {
        id: "physics-semiconductor-electronics-materials-devices-and-simple-circuits",
        name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        topics: [
          {
            id: "physics-semiconductor-electronics-materials-devices-and-simple-circuits-introduction-to-semiconductors-intrinsic-and-extrinsic-semiconductor",
            name: "Introduction to Semiconductors Intrinsic and Extrinsic Semiconductor",
          },
          {
            id: "physics-semiconductor-electronics-materials-devices-and-simple-circuits-pn-junction-diode-application-of-p-n-junction-diode",
            name: "PN Junction Diode Application of P-N Junction Diode",
          },
          {
            id: "physics-semiconductor-electronics-materials-devices-and-simple-circuits-application-of-transistor-and-logic-gate",
            name: "Application of transistor and logic gate",
          },
        ],
      },
    ],
  },
  {
    id: "maths",
    name: "Mathematics",
    chapters: [
      {
        id: "maths-basic-mathematics",
        name: "Basic Mathematics",
        topics: [
          {
            id: "maths-basic-mathematics-number-system",
            name: "Number system",
          },
          {
            id: "maths-basic-mathematics-wavy-curve-method",
            name: "Wavy Curve Method",
          },
          {
            id: "maths-basic-mathematics-logarithm",
            name: "Logarithm",
          },
          {
            id: "maths-basic-mathematics-modulus",
            name: "Modulus",
          },
        ],
      },
      {
        id: "maths-sets",
        name: "Sets",
        topics: [
          {
            id: "maths-sets-types-of-sets",
            name: "Types of Sets",
          },
          {
            id: "maths-sets-operations-on-sets",
            name: "Operations on Sets",
          },
          {
            id: "maths-sets-algebra-of-sets",
            name: "Algebra of sets",
          },
          {
            id: "maths-sets-geometrical-practical-problems-on-union-and-intersection-of-two-sets",
            name: "Geometrical Practical Problems on Union and Intersection of Two Sets",
          },
        ],
      },
      {
        id: "maths-trigonometric-functions",
        name: "Trigonometric Functions",
        topics: [
          {
            id: "maths-trigonometric-functions-introduction-trigonometric-ratios-for-acute-angle-basic-identities-sig",
            name: "Introduction Trigonometric Ratios for Acute Angle Basic identities Sign Convention of the Trigonometric Functions",
          },
          {
            id: "maths-trigonometric-functions-domain-range-of-trigonometric-functions",
            name: "Domain/Range of Trigonometric Functions",
          },
          {
            id: "maths-trigonometric-functions-allied-angles-sum-and-difference-formulae",
            name: "Allied Angles Sum and Difference Formulae",
          },
          {
            id: "maths-trigonometric-functions-multiple-and-submultiple-angles-trigonometric-ratios-of-standard-angle",
            name: "Multiple and Submultiple Angles Trigonometric Ratios of Standard Angles",
          },
          {
            id: "maths-trigonometric-functions-transformation-formulae-identities",
            name: "Transformation Formulae Identities",
          },
          {
            id: "maths-trigonometric-functions-maximum-minimum-value-some-series",
            name: "Maximum/Minimum Value Some Series",
          },
        ],
      },
      {
        id: "maths-trigonometric-equation",
        name: "Trigonometric Equation",
        topics: [
          {
            id: "maths-trigonometric-equation-introduction-solution",
            name: "Introduction Solution",
          },
          {
            id: "maths-trigonometric-equation-solution",
            name: "Solution",
          },
          {
            id: "maths-trigonometric-equation-type-of-trigonometric-equation",
            name: "Type of Trigonometric Equation",
          },
        ],
      },
      {
        id: "maths-quadratic-equations",
        name: "Quadratic Equations",
        topics: [
          {
            id: "maths-quadratic-equations-introduction",
            name: "Introduction",
          },
          {
            id: "maths-quadratic-equations-common-roots",
            name: "Common roots",
          },
          {
            id: "maths-quadratic-equations-theory-of-equation",
            name: "Theory of equation",
          },
          {
            id: "maths-quadratic-equations-graph-of-ax2-bx-c",
            name: "Graph of ax2+bx+c",
          },
          {
            id: "maths-quadratic-equations-sign-of-ax2-bx-c",
            name: "Sign of ax2+bx+c",
          },
          {
            id: "maths-quadratic-equations-location-of-roots",
            name: "Location of roots",
          },
          {
            id: "maths-quadratic-equations-some-results",
            name: "Some results",
          },
          {
            id: "maths-quadratic-equations-descartes-rule-of-signs",
            name: "Descartes rule of signs",
          },
        ],
      },
      {
        id: "maths-sequence-and-series",
        name: "Sequence and Series",
        topics: [
          {
            id: "maths-sequence-and-series-introduction",
            name: "Introduction",
          },
          {
            id: "maths-sequence-and-series-arithmetic-progression-ap",
            name: "Arithmetic Progression (AP)",
          },
          {
            id: "maths-sequence-and-series-geometric-progression-gp",
            name: "Geometric Progression (GP)",
          },
          {
            id: "maths-sequence-and-series-harmonic-progression-hp",
            name: "Harmonic Progression (HP)",
          },
          {
            id: "maths-sequence-and-series-insertion-of-means-between-two-numbers",
            name: "Insertion of means between Two numbers",
          },
          {
            id: "maths-sequence-and-series-properties-of-means",
            name: "Properties of Means",
          },
          {
            id: "maths-sequence-and-series-arithmetical-geometric-series-ags",
            name: "Arithmetical Geometric Series (AGS)",
          },
          {
            id: "maths-sequence-and-series-summation-method-of-difference",
            name: "Summation Method of difference",
          },
          {
            id: "maths-sequence-and-series-telescopic-series",
            name: "Telescopic series",
          },
        ],
      },
      {
        id: "maths-relation-function",
        name: "Relation Function",
        topics: [
          {
            id: "maths-relation-function-introduction",
            name: "Introduction",
          },
          {
            id: "maths-relation-function-cartesian-products-of-sets",
            name: "Cartesian Products of Sets",
          },
          {
            id: "maths-relation-function-relation",
            name: "Relation",
          },
          {
            id: "maths-relation-function-functions",
            name: "Functions",
          },
        ],
      },
      {
        id: "maths-permutations-and-combinations",
        name: "Permutations and Combinations",
        topics: [
          {
            id: "maths-permutations-and-combinations-introduction",
            name: "Introduction",
          },
          {
            id: "maths-permutations-and-combinations-counting",
            name: "Counting",
          },
          {
            id: "maths-permutations-and-combinations-permutation",
            name: "Permutation",
          },
          {
            id: "maths-permutations-and-combinations-circular-permutation",
            name: "Circular Permutation",
          },
          {
            id: "maths-permutations-and-combinations-combination",
            name: "Combination",
          },
          {
            id: "maths-permutations-and-combinations-divisors",
            name: "Divisors",
          },
          {
            id: "maths-permutations-and-combinations-exponent",
            name: "Exponent",
          },
          {
            id: "maths-permutations-and-combinations-division-and-distribution",
            name: "Division and distribution",
          },
          {
            id: "maths-permutations-and-combinations-derangement",
            name: "Derangement",
          },
          {
            id: "maths-permutations-and-combinations-some-rules",
            name: "Some rules",
          },
        ],
      },
      {
        id: "maths-binomial-theorem",
        name: "Binomial theorem",
        topics: [
          {
            id: "maths-binomial-theorem-introduction-expansion-of-x-a-n",
            name: "Introduction Expansion of (x+a)n",
          },
          {
            id: "maths-binomial-theorem-general-terms-middle-terms",
            name: "General terms Middle terms",
          },
          {
            id: "maths-binomial-theorem-numerically-greatest-term-of-binomial-expansion-form-a-n",
            name: "Numerically greatest term of binomial expansion Form (A + )n",
          },
          {
            id: "maths-binomial-theorem-sum-of-coefficients-in-binomial-expansion",
            name: "Sum of coefficients in binomial expansion",
          },
          {
            id: "maths-binomial-theorem-summation-of-series",
            name: "Summation of series",
          },
          {
            id: "maths-binomial-theorem-multinomial-theorem",
            name: "Multinomial theorem",
          },
          {
            id: "maths-binomial-theorem-binomial-theorem-for-any-index",
            name: "Binomial theorem for any index",
          },
        ],
      },
      {
        id: "maths-straight-lines",
        name: "Straight Lines",
        topics: [
          {
            id: "maths-straight-lines-introduction-section-formula",
            name: "Introduction Section formula",
          },
          {
            id: "maths-straight-lines-different-centre-of-triangle",
            name: "Different Centre of Triangle",
          },
          {
            id: "maths-straight-lines-area-locus",
            name: "Area Locus",
          },
          {
            id: "maths-straight-lines-straight-line-slope",
            name: "Straight line Slope",
          },
          {
            id: "maths-straight-lines-standard-form-of-straight-line",
            name: "Standard form of straight line",
          },
          {
            id: "maths-straight-lines-position-of-point-w-r-t-straight-line",
            name: "Position of point w.r.t straight line",
          },
          {
            id: "maths-straight-lines-angle-between-two-straight-lines",
            name: "Angle between two straight lines",
          },
          {
            id: "maths-straight-lines-perpendicular-distance-transformation-of-axis",
            name: "Perpendicular distance Transformation of Axis",
          },
          {
            id: "maths-straight-lines-concurrent-lines",
            name: "Concurrent lines",
          },
          {
            id: "maths-straight-lines-family-of-lines",
            name: "Family of lines",
          },
          {
            id: "maths-straight-lines-pair-straight-line",
            name: "Pair Straight Line",
          },
          {
            id: "maths-straight-lines-angle-bisector",
            name: "Angle bisector",
          },
        ],
      },
      {
        id: "maths-circles",
        name: "Circles",
        topics: [
          {
            id: "maths-circles-introduction-general-equation",
            name: "Introduction General equation",
          },
          {
            id: "maths-circles-diameter-form-parametric-form",
            name: "Diameter form Parametric form",
          },
          {
            id: "maths-circles-intercept-made-on-axis-position-of-point-w-r-t-circle",
            name: "Intercept made on axis Position of point w.r.t circle",
          },
          {
            id: "maths-circles-position-of-straight-lines-w-r-t-circles-tangent",
            name: "Position of straight lines w.r.t circles Tangent",
          },
          {
            id: "maths-circles-normal-director-circle-chord-of-contact-chord-of-mid-point-form",
            name: "Normal Director circle Chord of contact Chord of mid point form",
          },
          {
            id: "maths-circles-pair-of-tangent-radical-axis",
            name: "Pair of tangent Radical axis",
          },
          {
            id: "maths-circles-family-of-circles-position-of-two-circles",
            name: "Family of circles Position of two Circles",
          },
          {
            id: "maths-circles-common-tangent-angle-of-intersection-of-two-circle",
            name: "Common tangent Angle of intersection of two circle",
          },
          {
            id: "maths-circles-orthogonality-of-two-circles-circle-circumscribing-a-triangle-quadrila",
            name: "Orthogonality of two circles Circle circumscribing a triangle quadrilateral",
          },
        ],
      },
      {
        id: "maths-conic-sections-parabola",
        name: "Conic Sections:Parabola",
        topics: [
          {
            id: "maths-conic-sections-parabola-introduction-standard-form-parametric-form-types-of-parabola",
            name: "Introduction Standard form Parametric form Types of parabola",
          },
          {
            id: "maths-conic-sections-parabola-general-equation-focal-distance",
            name: "General equation Focal distance",
          },
          {
            id: "maths-conic-sections-parabola-some-result",
            name: "Some result",
          },
          {
            id: "maths-conic-sections-parabola-position-of-point-w-r-t-parabola-position-of-straight-lines-w-r-t-para",
            name: "Position of point w.r.t. parabola Position of straight lines w.r.t parabola",
          },
          {
            id: "maths-conic-sections-parabola-tangent-normal-properties-of-tangent-and-normal",
            name: "Tangent Normal Properties of Tangent & Normal",
          },
          {
            id: "maths-conic-sections-parabola-focal-chord-chord-of-contact",
            name: "Focal chord Chord of contact",
          },
          {
            id: "maths-conic-sections-parabola-chord-in-mid-points-form-pair-of-tangents",
            name: "Chord in mid points form Pair of tangents",
          },
          {
            id: "maths-conic-sections-parabola-director-circle-properties",
            name: "Director circle Properties",
          },
        ],
      },
      {
        id: "maths-conic-sections-ellipse",
        name: "Conic Sections:Ellipse",
        topics: [
          {
            id: "maths-conic-sections-ellipse-introduction-standard-form-auxiliary-circle",
            name: "Introduction Standard form Auxiliary circle",
          },
          {
            id: "maths-conic-sections-ellipse-general-equation-another-definition-focal-distance",
            name: "General equation Another definition Focal distance",
          },
          {
            id: "maths-conic-sections-ellipse-position-of-point-w-r-t-ellipse-position-of-straight-line-w-r-t-ellips",
            name: "Position of point w.r.t. ellipse Position of straight line w.r.t. ellipse",
          },
          {
            id: "maths-conic-sections-ellipse-tangent-normal",
            name: "Tangent Normal",
          },
          {
            id: "maths-conic-sections-ellipse-equation-of-chord-joining-the-p-a-and-q-b-director-circle-properties",
            name: "Equation of chord joining the P(a) and Q(b) Director circle Properties",
          },
          {
            id: "maths-conic-sections-ellipse-director-circle-properties",
            name: "Director circle Properties",
          },
        ],
      },
      {
        id: "maths-conic-sections-hyperbola",
        name: "Conic Sections:Hyperbola",
        topics: [
          {
            id: "maths-conic-sections-hyperbola-introduction-standard-form-auxiliary-circle-general-equation-another-d",
            name: "Introduction Standard form Auxiliary circle General equation Another definition",
          },
          {
            id: "maths-conic-sections-hyperbola-focal-distance-position-of-point-w-r-t-hyperbola-position-of-straight",
            name: "Focal distance Position of point w.r.t. hyperbola Position of straight lines w.r.t. hyperbola",
          },
          {
            id: "maths-conic-sections-hyperbola-tangent-normal-properties-related-to-tangent-and-normal-chord-of-conta",
            name: "Tangent Normal Properties Related to Tangent & normal Chord of contact Chord in mid point form Pair of tangents",
          },
          {
            id: "maths-conic-sections-hyperbola-director-circle-asymptotes-rectangular-hyperbola-properties",
            name: "Director circle Asymptotes Rectangular hyperbola Properties",
          },
        ],
      },
      {
        id: "maths-complex-number",
        name: "Complex Number",
        topics: [
          {
            id: "maths-complex-number-introduction-complex-numbers",
            name: "Introduction, Complex Numbers",
          },
          {
            id: "maths-complex-number-algebraic-operations",
            name: "Algebraic operations",
          },
          {
            id: "maths-complex-number-argand-plane-or-complex-plane",
            name: "Argand Plane or complex plane",
          },
          {
            id: "maths-complex-number-conjugate-of-complex",
            name: "Conjugate of Complex",
          },
          {
            id: "maths-complex-number-modulus-of-complex-no",
            name: "Modulus of complex no",
          },
          {
            id: "maths-complex-number-argument-of-complex-numbers",
            name: "Argument of Complex numbers",
          },
          {
            id: "maths-complex-number-form-of-complex-numbers",
            name: "Form of complex numbers",
          },
          {
            id: "maths-complex-number-de-moivre-s-theorem",
            name: "De moivre's theorem",
          },
          {
            id: "maths-complex-number-cube-roots-of-unity-nth-root-of-unity",
            name: "Cube roots of unity nth root of unity",
          },
          {
            id: "maths-complex-number-geometry-of-complex",
            name: "Geometry of complex",
          },
        ],
      },
      {
        id: "maths-limits-and-derivatives",
        name: "Limits and Derivatives",
        topics: [
          {
            id: "maths-limits-and-derivatives-introduction-limit",
            name: "Introduction Limit",
          },
          {
            id: "maths-limits-and-derivatives-derivative",
            name: "Derivative",
          },
        ],
      },
      {
        id: "maths-statistics",
        name: "Statistics",
        topics: [
          {
            id: "maths-statistics-introduction-variable-variate-relative-and-cumulative-frequency",
            name: "Introduction Variable (Variate) Relative and cumulative frequency",
          },
          {
            id: "maths-statistics-mean-median",
            name: "Mean Median",
          },
          {
            id: "maths-statistics-mode-relation-among-mean-median-and-mode-measure-of-dispersion-varianc",
            name: "Mode Relation among mean median and mode Measure of Dispersion Variance",
          },
        ],
      },
      {
        id: "maths-probability",
        name: "Probability",
        topics: [
          {
            id: "maths-probability-introduction-event-types-of-events-algebra-of-events-complementary-eve",
            name: 'Introduction Event Types of events Algebra of events Complementary event Mutually exclusive event" Exhaustive event Axiomatic approach to probability Variance',
          },
          {
            id: "maths-probability-introduction",
            name: "Introduction",
          },
          {
            id: "maths-probability-event",
            name: "Event",
          },
          {
            id: "maths-probability-probability-some-theorems",
            name: "Probability Some theorems",
          },
          {
            id: "maths-probability-independent-events",
            name: "Independent events",
          },
          {
            id: "maths-probability-conditional-probability",
            name: "Conditional probability",
          },
          {
            id: "maths-probability-bayes-theorem-random-variable",
            name: "Bayes Theorem Random variable",
          },
          {
            id: "maths-probability-binomial-theorem-on-probability",
            name: "Binomial theorem on probability",
          },
          {
            id: "maths-probability-uncountable-uniform-spaces",
            name: "Uncountable uniform spaces",
          },
        ],
      },
      {
        id: "maths-introduction-to-three-dimensional-geometry",
        name: "Introduction to Three Dimensional Geometry",
        topics: [
          {
            id: "maths-introduction-to-three-dimensional-geometry-introduction-coordinate-axes-and-coordinate-plane-coordinate-of-point",
            name: '"Introduction Coordinate Axes and coordinate plane Coordinate of point is space" "Distance between two points Section Formula"',
          },
        ],
      },
      {
        id: "maths-linear-inequalities",
        name: "Linear Inequalities",
        topics: [
          {
            id: "maths-linear-inequalities-introduction-basic-concepts-and-terminologies-solving-linear-inequalit",
            name: 'Introduction, Basic Concepts & Terminologies Solving Linear Inequalities in One Variable Solving Linear Inequalities in Two Variables "Graphical Method & Shaded Regions Word Problems & Real-life Application"',
          },
        ],
      },
      {
        id: "maths-solution-of-triangle",
        name: "Solution of Triangle",
        topics: [
          {
            id: "maths-solution-of-triangle-introduction-sine-rule-cosine-rule-projection-formulae-napier-s-analog",
            name: "Introduction Sine rule Cosine rule Projection Formulae Napier's Analogy Auxiliary formulas",
          },
          {
            id: "maths-solution-of-triangle-area-of-triangle-centres-of-triangle-regular-polygon-solution-of-trian",
            name: "Area of triangle Centres of Triangle Regular Polygon Solution of Triangle Excentral triangle Some Results",
          },
        ],
      },
      {
        id: "maths-determinants",
        name: "Determinants",
        topics: [
          {
            id: "maths-determinants-introduction",
            name: "Introduction",
          },
          {
            id: "maths-determinants-minor-and-cofactor",
            name: "Minor and cofactor",
          },
          {
            id: "maths-determinants-general-properties",
            name: "General Properties",
          },
          {
            id: "maths-determinants-addition-summation",
            name: "Addition/Summation",
          },
          {
            id: "maths-determinants-product-differentiation",
            name: "Product Differentiation",
          },
          {
            id: "maths-determinants-solution-of-equation",
            name: "Solution of Equation",
          },
        ],
      },
      {
        id: "maths-matrices",
        name: "Matrices",
        topics: [
          {
            id: "maths-matrices-introduction-types-of-the-matrices-equality-of-matrices",
            name: "Introduction Types of the Matrices Equality of Matrices",
          },
          {
            id: "maths-matrices-trace-of-a-matrix-determinants-operation-on-matrices-addition-subtract",
            name: "Trace of a Matrix Determinants Operation on Matrices (Addition, Subtraction and Multiplication) Matrix Polynomial",
          },
          {
            id: "maths-matrices-transpose-of-a-matrix-transposed-conjugate-of-a-matrix-a",
            name: "Transpose of a Matrix Transposed Conjugate of a Matrix A",
          },
          {
            id: "maths-matrices-symmetric-and-skew-symmetric-matrix-orthogonal-matrix",
            name: "Symmetric and Skew Symmetric Matrix Orthogonal matrix",
          },
          {
            id: "maths-matrices-adjoint-of-matrix-invertible-matrix",
            name: "Adjoint of Matrix Invertible Matrix",
          },
          {
            id: "maths-matrices-elementary-operation-transformation-of-a-matrix",
            name: "Elementary Operation (Transformation) of a Matrix",
          },
          {
            id: "maths-matrices-inverse-of-a-matrix",
            name: "Inverse of a matrix",
          },
          {
            id: "maths-matrices-characteristic-equation-equation-solving-by-matrix-method",
            name: "Characteristic equation Equation solving by matrix method",
          },
        ],
      },
      {
        id: "maths-relations-and-functions",
        name: "Relations and Functions",
        topics: [
          {
            id: "maths-relations-and-functions-relation",
            name: "Relation",
          },
          {
            id: "maths-relations-and-functions-type-of-relations",
            name: "Type of Relations",
          },
          {
            id: "maths-relations-and-functions-functions",
            name: "Functions",
          },
          {
            id: "maths-relations-and-functions-domain-and-range-of-functions",
            name: "Domain and Range of Functions",
          },
          {
            id: "maths-relations-and-functions-type-of-functions",
            name: "Type of Functions",
          },
          {
            id: "maths-relations-and-functions-equal-function",
            name: "Equal Function",
          },
          {
            id: "maths-relations-and-functions-classification-of-function",
            name: "Classification of Function",
          },
          {
            id: "maths-relations-and-functions-composite-function",
            name: "Composite Function",
          },
          {
            id: "maths-relations-and-functions-odd-even-function",
            name: "Odd/Even Function",
          },
          {
            id: "maths-relations-and-functions-period-of-function",
            name: "Period of Function",
          },
          {
            id: "maths-relations-and-functions-inverse-of-function",
            name: "Inverse of Function",
          },
          {
            id: "maths-relations-and-functions-some-graph-and-its-transformation",
            name: "Some Graph and its transformation",
          },
          {
            id: "maths-relations-and-functions-functional-equation",
            name: "Functional Equation",
          },
        ],
      },
      {
        id: "maths-inverse-trigonometric-functions",
        name: "Inverse Trigonometric Functions",
        topics: [
          {
            id: "maths-inverse-trigonometric-functions-introduction",
            name: "Introduction",
          },
          {
            id: "maths-inverse-trigonometric-functions-domain-range-of-itf",
            name: "Domain/Range of ITF",
          },
          {
            id: "maths-inverse-trigonometric-functions-graph",
            name: "Graph",
          },
          {
            id: "maths-inverse-trigonometric-functions-properties-of-inverse-circular-functions",
            name: "Properties of Inverse Circular Functions",
          },
          {
            id: "maths-inverse-trigonometric-functions-some-graphs",
            name: "Some Graphs",
          },
        ],
      },
      {
        id: "maths-limit-continuity-and-differentiability",
        name: "Limit, Continuity and Differentiability",
        topics: [
          {
            id: "maths-limit-continuity-and-differentiability-limit",
            name: "Limit",
          },
          {
            id: "maths-limit-continuity-and-differentiability-method-finding-limit",
            name: "Method finding limit",
          },
          {
            id: "maths-limit-continuity-and-differentiability-sandwich-theorem",
            name: "Sandwich Theorem",
          },
          {
            id: "maths-limit-continuity-and-differentiability-newton-leibnitz-theorem",
            name: "Newton Leibnitz Theorem",
          },
          {
            id: "maths-limit-continuity-and-differentiability-continuity",
            name: "Continuity",
          },
          {
            id: "maths-limit-continuity-and-differentiability-intermediate-mean-value-theorem",
            name: "Intermediate mean value theorem",
          },
          {
            id: "maths-limit-continuity-and-differentiability-differentiability",
            name: "Differentiability",
          },
        ],
      },
      {
        id: "maths-method-of-differentiation",
        name: "Method of Differentiation",
        topics: [
          {
            id: "maths-method-of-differentiation-differentiation",
            name: "Differentiation",
          },
        ],
      },
      {
        id: "maths-application-of-derivatives",
        name: "Application of Derivatives",
        topics: [
          {
            id: "maths-application-of-derivatives-tangent-and-normal",
            name: "Tangent and normal",
          },
          {
            id: "maths-application-of-derivatives-angle-between-two-curves",
            name: "Angle between two curves",
          },
          {
            id: "maths-application-of-derivatives-shortest-distnace-between-two-curves",
            name: "Shortest distnace between two curves",
          },
          {
            id: "maths-application-of-derivatives-approximation-and-error",
            name: "Approximation and error",
          },
          {
            id: "maths-application-of-derivatives-monotonicity",
            name: "Monotonicity",
          },
          {
            id: "maths-application-of-derivatives-stationary-points-critical-points",
            name: "Stationary points, Critical Points",
          },
          {
            id: "maths-application-of-derivatives-maxima-and-minima",
            name: "Maxima and Minima",
          },
          {
            id: "maths-application-of-derivatives-global-maxima-global-minima",
            name: "Global maxima/ global minima",
          },
          {
            id: "maths-application-of-derivatives-concavity",
            name: "Concavity",
          },
          {
            id: "maths-application-of-derivatives-rolle-s-theorem",
            name: "Rolle's theorem",
          },
          {
            id: "maths-application-of-derivatives-lagrange-s-mean-value-theorem-lmvt-curve-sketching",
            name: "Lagrange's mean value theorem (LMVT) Curve Sketching",
          },
        ],
      },
      {
        id: "maths-indefinite-integration",
        name: "Indefinite Integration",
        topics: [
          {
            id: "maths-indefinite-integration-introduction-algebra-of-integration-integration-by-substitution",
            name: "Introduction Algebra of integration Integration by substitution",
          },
          {
            id: "maths-indefinite-integration-use-of-trigonometric-identities",
            name: "Use of trigonometric identities",
          },
          {
            id: "maths-indefinite-integration-type-integration-by-parts-use-of-partial-fraction",
            name: "Type Integration by parts Use of partial fraction",
          },
          {
            id: "maths-indefinite-integration-algebraic-function",
            name: "Algebraic function",
          },
          {
            id: "maths-indefinite-integration-trigonometric-form",
            name: "Trigonometric form",
          },
          {
            id: "maths-indefinite-integration-some-special-type",
            name: "Some special type",
          },
          {
            id: "maths-indefinite-integration-irrational-form-reduction-from",
            name: "Irrational form Reduction from",
          },
        ],
      },
      {
        id: "maths-definite-integration",
        name: "Definite Integration",
        topics: [
          {
            id: "maths-definite-integration-introduction",
            name: "Introduction",
          },
          {
            id: "maths-definite-integration-properties",
            name: "Properties",
          },
          {
            id: "maths-definite-integration-newton-leibniz-theorem",
            name: "Newton Leibniz Theorem",
          },
          {
            id: "maths-definite-integration-definite-integration-with-using-limit-as-a-sum",
            name: "Definite integration with using limit as a sum",
          },
          {
            id: "maths-definite-integration-wall-s-formula-gamma-function",
            name: "Wall's Formula/ Gamma function",
          },
          {
            id: "maths-definite-integration-estimation",
            name: "Estimation",
          },
          {
            id: "maths-definite-integration-some-standard-result",
            name: "Some standard result",
          },
        ],
      },
      {
        id: "maths-application-of-integrals",
        name: "Application of integrals",
        topics: [
          {
            id: "maths-application-of-integrals-area-between-two-curves",
            name: "Area between two curves",
          },
          {
            id: "maths-application-of-integrals-curve-sketching",
            name: "Curve Sketching",
          },
        ],
      },
      {
        id: "maths-differential-equation",
        name: "Differential Equation",
        topics: [
          {
            id: "maths-differential-equation-introduction",
            name: "Introduction",
          },
          {
            id: "maths-differential-equation-formation-of-differential-equation",
            name: "Formation of differential Equation",
          },
          {
            id: "maths-differential-equation-solution-of-differential-equation",
            name: "Solution of differential Equation",
          },
          {
            id: "maths-differential-equation-orthogonal-trajectory",
            name: "Orthogonal trajectory",
          },
          {
            id: "maths-differential-equation-clairaut-s-equation",
            name: "Clairaut's equation",
          },
          {
            id: "maths-differential-equation-application-of-differential-equation",
            name: "Application of differential equation",
          },
        ],
      },
      {
        id: "maths-vector-algebra",
        name: "Vector Algebra",
        topics: [
          {
            id: "maths-vector-algebra-introduction-type-of-vector-addition-of-vector-proportion",
            name: "Introduction Type of vector Addition of Vector Proportion",
          },
          {
            id: "maths-vector-algebra-collinear-vector-orthogonal-system-section-formula",
            name: "Collinear vector Orthogonal system Section formula",
          },
          {
            id: "maths-vector-algebra-scalar-dot-product-of-two-vector-vector-cross-product",
            name: "Scalar(dot) product of two vector Vector (cross) product",
          },
          {
            id: "maths-vector-algebra-scalar-triple-product-stp",
            name: "Scalar triple product (STP)",
          },
          {
            id: "maths-vector-algebra-vector-triple-product-vtp",
            name: "Vector triple product (VTP)",
          },
          {
            id: "maths-vector-algebra-reciprocal-system-of-vectors",
            name: "Reciprocal system of vectors",
          },
          {
            id: "maths-vector-algebra-linearly-dependent-and-independent-vector-application-of-vector",
            name: "Linearly dependent and independent vector Application of vector",
          },
        ],
      },
      {
        id: "maths-three-dimensional-geometry",
        name: "Three Dimensional Geometry",
        topics: [
          {
            id: "maths-three-dimensional-geometry-introduction-section-formulae",
            name: "Introduction Section Formulae",
          },
          {
            id: "maths-three-dimensional-geometry-direction-cosine-direction-ratio",
            name: "Direction cosine Direction Ratio",
          },
          {
            id: "maths-three-dimensional-geometry-line-angle-between-two-line-segment",
            name: "Line Angle between two line segment",
          },
          {
            id: "maths-three-dimensional-geometry-perpendicular-distance-plane",
            name: "Perpendicular distance Plane",
          },
          {
            id: "maths-three-dimensional-geometry-position-of-two-points-w-r-t-plane-area-of-triangle-area-between-plane",
            name: "Position of Two points w.r.t. plane Area of Triangle Area between planes Prependicular distance of point from plane",
          },
          {
            id: "maths-three-dimensional-geometry-angle-bisecter-family-of-plane-angle-between-line-and-plane-coplanar-l",
            name: "Angle bisecter Family of plane Angle between line and plane Coplanar lines Skew line Unit Tetrahedron and unit cube",
          },
        ],
      },
      {
        id: "maths-linear-programming",
        name: "Linear Programming",
        topics: [
          {
            id: "maths-linear-programming-introduction-some-terms-method-solving-linear-programming-problems-fun",
            name: "Introduction Some terms Method solving linear programming problems Fundamental theorem for linear programming problem Corner point method Type of Linear programming problem Advantage of Linear programming",
          },
        ],
      },
    ],
  },
  {
    id: "physical-chemistry",
    name: "Physical Chemistry",
    group: "Chemistry",
    chapters: [
      {
        id: "physical-chemistry-some-basic-concepts-of-chemistry",
        name: "Some Basic Concepts of Chemistry",
        topics: [
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-nature-of-matter-classification-of-matter-properties-of-matter-and-the",
            name: "Nature of Matter,Classification of Matter, Properties of Matter and their Measurement, International System of Units (S.I)",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-uncertainty-in-measurement",
            name: "Uncertainty in Measurement",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-laws-of-chemical-combinations",
            name: "Laws of Chemical Combinations",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-dalton-s-atomic-theory-atomic-mass",
            name: "Dalton's Atomic Theory,Atomic Mass",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-atomic-mass-unit",
            name: "Atomic Mass Unit",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-gram-atomic-mass",
            name: "Gram Atomic Mass",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-average-atomic-mass",
            name: "Average Atomic Mass",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-molecular-mass-gram-molecular-mass",
            name: "Molecular Mass,Gram Molecular Mass",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-average-molecular-mass-formula-mass",
            name: "Average Molecular Mass Formula Mass",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-percentage-composition-empirical-and-molecular-formula",
            name: "Percentage Composition,Empirical and Molecular formula",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-mole-vapour-density-atomicity-mole-concept",
            name: "Mole,Vapour density,Atomicity Mole Concept",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-stoichiometry-and-stoichiometric-calculations",
            name: "Stoichiometry and Stoichiometric Calculations",
          },
          {
            id: "physical-chemistry-some-basic-concepts-of-chemistry-concentration-terms-and-application",
            name: "Concentration Terms & Application",
          },
        ],
      },
      {
        id: "physical-chemistry-structure-of-atom",
        name: "Structure of Atom",
        topics: [
          {
            id: "physical-chemistry-structure-of-atom-introdution",
            name: "Introdution",
          },
          {
            id: "physical-chemistry-structure-of-atom-fundamental-particles-discovery-of-fundamental-particles",
            name: "Fundamental Particles,Discovery of Fundamental Particles",
          },
          {
            id: "physical-chemistry-structure-of-atom-atomic-models",
            name: "Atomic Models",
          },
          {
            id: "physical-chemistry-structure-of-atom-some-important-atomic-terms-nature-of-light-and-electromagnetic-spectr",
            name: "Some Important Atomic Terms,Nature of Light and Electromagnetic Spectrum,Particle Nature of Electromagnetic Radiation: Planck’s Quantum,Application of Planck’s Quantum Theory",
          },
          {
            id: "physical-chemistry-structure-of-atom-bohr-s-model-for-hydrogen-atom",
            name: "Bohr's Model for Hydrogen Atom",
          },
          {
            id: "physical-chemistry-structure-of-atom-ionization-energy-of-hydrogen-and-hydrogen-like-particles",
            name: "Ionization Energy of Hydrogen and Hydrogen- Like Particles",
          },
          {
            id: "physical-chemistry-structure-of-atom-spectrum-evidence-for-the-quantized-electronic-energy-levels",
            name: "Spectrum: Evidence for the Quantized Electronic Energy Levels",
          },
          {
            id: "physical-chemistry-structure-of-atom-quantum-mechanical-model-of-the-atom",
            name: "Quantum Mechanical Model of the Atom",
          },
          {
            id: "physical-chemistry-structure-of-atom-quantum-number",
            name: "Quantum Number",
          },
          {
            id: "physical-chemistry-structure-of-atom-rules-for-filling-of-electrons-in-orbitals-in-atom-exchange-and-pairin",
            name: "Rules for Filling of electrons in Orbitals in Atom, Exchange and Pairing energy",
          },
        ],
      },
      {
        id: "physical-chemistry-state-of-matter",
        name: "State of matter",
        topics: [
          {
            id: "physical-chemistry-state-of-matter-the-gaseous-state",
            name: "The Gaseous State",
          },
          {
            id: "physical-chemistry-state-of-matter-the-gas-laws",
            name: "The Gas Laws",
          },
          {
            id: "physical-chemistry-state-of-matter-the-gas-laws-ideal-gas-equation",
            name: "The Gas Laws,Ideal Gas Equation",
          },
          {
            id: "physical-chemistry-state-of-matter-dalton-s-law-of-partial-pressures-graham-s-law-of-diffusion-effusion",
            name: "Dalton's Law of Partial Pressures Graham's Law of Diffusion/effusion",
          },
          {
            id: "physical-chemistry-state-of-matter-kinetic-molecular-theory-of-gases-kinetic-gas-equation-explanation-of",
            name: "Kinetic Molecular Theory of Gases Kinetic Gas Equation Explanation of Gas Law from Kinetic Theory Kinetic Energy and Molecular Speeds",
          },
          {
            id: "physical-chemistry-state-of-matter-maxwell-boltzmann-distribution-of-molecular-speeds-behaviour-of-real-g",
            name: "Maxwell-Boltzmann Distribution of Molecular Speeds Behaviour of Real Gases : Deviation from Ideal Gas Behaviour",
          },
          {
            id: "physical-chemistry-state-of-matter-equation-of-state-for-real-gases-van-der-waals-equation",
            name: "Equation of State for Real Gases (Van der Waals Equation)",
          },
          {
            id: "physical-chemistry-state-of-matter-liquefaction-of-gases",
            name: "Liquefaction of Gases",
          },
          {
            id: "physical-chemistry-state-of-matter-eudiometry",
            name: "Eudiometry",
          },
        ],
      },
      {
        id: "physical-chemistry-thermodynamics",
        name: "Thermodynamics",
        topics: [
          {
            id: "physical-chemistry-thermodynamics-introduction-basic-terms-classification-of-system-on-the-basis-of-natu",
            name: "Introduction,Basic terms,Classification of system on the basis of nature,State of system",
          },
          {
            id: "physical-chemistry-thermodynamics-types-of-properties-types-of-thermodynamic-processes-on-basis-of-the-w",
            name: "Types of properties,TYPES OF THERMODYNAMIC PROCESSES ON BASIS OF THE WAY THE PROCESSES ARE CARRIED OUT",
          },
          {
            id: "physical-chemistry-thermodynamics-work-heat-and-internal-energy-first-law-of-thermodynamics-enthalpy-hea",
            name: "Work, heat and internal energy,First Law of Thermodynamics Enthalpy Heat Capacity",
          },
          {
            id: "physical-chemistry-thermodynamics-calculation-of-q-w-u-and-h-in-various-process",
            name: "CALCULATION OF Q, W, ΔU & ΔH IN VARIOUS PROCESS",
          },
          {
            id: "physical-chemistry-thermodynamics-thermochemistry-enthalpy-of-a-substance-standard-state-of-substance-en",
            name: "Thermochemistry Enthalpy of a substance Standard state of substance Enthalpy of reaction Factor affecting heat of reaction LAWS OF THERMOCHEMISTRY",
          },
          {
            id: "physical-chemistry-thermodynamics-enthalpy-change-for-different-type-of-reaction",
            name: "Enthalpy change for different type of reaction",
          },
          {
            id: "physical-chemistry-thermodynamics-limitation-of-ist-law-of-thermodynamics-spontaneous-process-entropy",
            name: "Limitation of Ist law of thermodynamics Spontaneous process Entropy",
          },
          {
            id: "physical-chemistry-thermodynamics-second-law-of-thermodynamics-entropy-change-of-an-ideal-gas",
            name: "Second law of Thermodynamics ENTROPY CHANGE OF AN IDEAL GAS",
          },
          {
            id: "physical-chemistry-thermodynamics-entropy-change-of-solids-and-liquids-upon-heating-entropy-calculation",
            name: "Entropy Change of Solids and liquids Upon Heating Entropy Calculation for solid or liquid systems",
          },
          {
            id: "physical-chemistry-thermodynamics-standard-absolute-molar-entropy-comparing-absolute-entropies-of-substa",
            name: "Standard absolute molar entropy Comparing absolute entropies of substance",
          },
          {
            id: "physical-chemistry-thermodynamics-entropy-change-ds-of-a-chemical-reaction-gibbs-free-energy",
            name: "Entropy Change (DS) of a Chemical Reaction GIBBS FREE ENERGY",
          },
        ],
      },
      {
        id: "physical-chemistry-redox-reaction",
        name: "Redox Reaction",
        topics: [
          {
            id: "physical-chemistry-redox-reaction-introduction",
            name: "Introduction",
          },
          {
            id: "physical-chemistry-redox-reaction-balancing-of-redox-reaction-types-of-redox-reaction",
            name: "Balancing of Redox Reaction Types of Redox Reaction",
          },
          {
            id: "physical-chemistry-redox-reaction-concept-of-n-factor-or",
            name: "CONCEPT OF n-FACTOR OR",
          },
          {
            id: "physical-chemistry-redox-reaction-valency-factor",
            name: "VALENCY FACTOR",
          },
          {
            id: "physical-chemistry-redox-reaction-law-of-equivalence",
            name: "LAW OF EQUIVALENCE",
          },
        ],
      },
      {
        id: "physical-chemistry-chemical-equilibrium",
        name: "Chemical Equilibrium",
        topics: [
          {
            id: "physical-chemistry-chemical-equilibrium-introduction-characteristics-of-chemical-equilibrium-law-of-mass-actio",
            name: "Introduction,Characteristics of chemical equilibrium Law of mass action",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-law-of-mass-action",
            name: "Law of mass action",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-variation-of-equilibrium-constant-with-the-change-of-stoichiometric-co",
            name: "Variation of equilibrium constant with the change of stoichiometric coefficients,Multiple",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-equilibrium-reaction-quotient",
            name: "Equilibrium Reaction Quotient",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-equilibrium-constant-of-various-equilibrium",
            name: "Equilibrium Constant of Various equilibrium,",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-calculation-of-degree-of-dissociation-from-vapour-density-measurement",
            name: "Calculation of degree of dissociation from vapour density measurement",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-le-chatelier-s-principle",
            name: "Le chatelier's principle",
          },
          {
            id: "physical-chemistry-chemical-equilibrium-effect-of-temperature-on-equilibrium-constant-free-energy-and-chemical",
            name: "Effect of temperature on equilibrium constant Free energy and chemical equilibrium Physical Equilibrium",
          },
        ],
      },
      {
        id: "physical-chemistry-ionic-equilibrium",
        name: "Ionic Equilibrium",
        topics: [
          {
            id: "physical-chemistry-ionic-equilibrium-type-of-electrolytes-different-theory-for-acid-and-base-the-autoioniza",
            name: "Type of electrolytes,Different theory for acid and base,The autoionization of water",
          },
          {
            id: "physical-chemistry-ionic-equilibrium-the-ph-scale-ionisation-of-weak-electrolyte",
            name: "The pH-Scale Ionisation of weak electrolyte",
          },
          {
            id: "physical-chemistry-ionic-equilibrium-common-ion-effect-and-levelling-effect",
            name: "Common ion effect and levelling effect",
          },
          {
            id: "physical-chemistry-ionic-equilibrium-ph-calculation",
            name: "pH-Calculation",
          },
          {
            id: "physical-chemistry-ionic-equilibrium-buffer-solution",
            name: "Buffer Solution",
          },
          {
            id: "physical-chemistry-ionic-equilibrium-salt-hydrolysis",
            name: "Salt hydrolysis",
          },
          {
            id: "physical-chemistry-ionic-equilibrium-indicator-acid-base-titration-solubility-and-solubility-product",
            name: "Indicator Acid-base titration Solubility and Solubility product",
          },
        ],
      },
      {
        id: "physical-chemistry-solutions",
        name: "Solutions",
        topics: [
          {
            id: "physical-chemistry-solutions-binary-solution-concentration-terms",
            name: "Binary Solution Concentration Terms",
          },
          {
            id: "physical-chemistry-solutions-concentration-terms",
            name: "Concentration Terms",
          },
          {
            id: "physical-chemistry-solutions-solubility",
            name: "Solubility",
          },
          {
            id: "physical-chemistry-solutions-vapour-pressure-vapour-pressure-of-liquid-solutions",
            name: "Vapour Pressure Vapour Pressure of Liquid Solutions",
          },
          {
            id: "physical-chemistry-solutions-determination-of-vapour-pressure-of-a-liquid-vapour-pressure-of-liquid",
            name: "Determination of Vapour Pressure of a Liquid Vapour Pressure of Liquid Solutions",
          },
          {
            id: "physical-chemistry-solutions-ideal-and-non-ideal-solutions",
            name: "Ideal and Non-ideal Solutions",
          },
          {
            id: "physical-chemistry-solutions-colligative-properties",
            name: "Colligative Properties",
          },
          {
            id: "physical-chemistry-solutions-osmosis-osmotic-pressure",
            name: "Osmosis Osmotic Pressure",
          },
          {
            id: "physical-chemistry-solutions-abnormal-molar-masses-van-t-hoff-factor-and-abnormality-in-molar-mass",
            name: "Abnormal Molar Masses Van't Hoff Factor and Abnormality in Molar Mass Abnormal Molar Masses Van't Hoff Factor and Abnormality in Molar Mass",
          },
        ],
      },
      {
        id: "physical-chemistry-chemical-kinetics",
        name: "Chemical Kinetics",
        topics: [
          {
            id: "physical-chemistry-chemical-kinetics-introduction-rate-of-reaction-rate-law-expression-rate-constant",
            name: "Introduction Rate of Reaction Rate Law Expression Rate constant",
          },
          {
            id: "physical-chemistry-chemical-kinetics-factors-affecting-the-reaction-rate-order-and-molecularity-of-reaction",
            name: "Factors Affecting the Reaction Rate Order and molecularity of Reaction Negative Order of the Reaction Approximation",
          },
          {
            id: "physical-chemistry-chemical-kinetics-integrated-rate-equations-numericals-on-some-important-first-order-rea",
            name: "Integrated Rate Equations Numericals on Some Important First Order Reactions Integrated Rate Equations",
          },
          {
            id: "physical-chemistry-chemical-kinetics-pseudo-first-order-reaction-experimental-determination-of-order-of-rea",
            name: "Pseudo First Order Reaction Experimental Determination of Order of Reaction Experimental Determination of Order of Reaction",
          },
          {
            id: "physical-chemistry-chemical-kinetics-collision-theory-of-chemical-reactions-concept-of-activation-energy-an",
            name: "Collision Theory of Chemical Reactions Concept of Activation Energy and Transition State Theory Activation Energy Activated Complex Theory",
          },
          {
            id: "physical-chemistry-chemical-kinetics-effect-of-temperature-on-the-reaction-rate-temperature-dependence-of-t",
            name: "Effect of Temperature on the reaction rate Temperature Dependence of the Rate of a Reaction Temperature Dependence of the Rate of a Reaction Potential Energy Curves Ratio of Two Rate Constant at Two Different Temperatures",
          },
          {
            id: "physical-chemistry-chemical-kinetics-parallel-decay-parallel-reactions-sequential-decay-kinetics-of-consecu",
            name: "Parallel Decay Parallel Reactions Sequential Decay Kinetics of Consecutive/Sequence/Series Reactions Reversible Reaction",
          },
          {
            id: "physical-chemistry-chemical-kinetics-effect-of-catalyst-on-the-reaction-rate-enzyme-catalysis-nuclear-chemi",
            name: "Effect of Catalyst on the Reaction rate Enzyme Catalysis Nuclear Chemistry",
          },
          {
            id: "physical-chemistry-chemical-kinetics-radioactive-series-and-nuclear-reactions-applications-of-radioactivity",
            name: "Radioactive Series and Nuclear Reactions Applications of Radioactivity",
          },
        ],
      },
      {
        id: "physical-chemistry-electrochemistry",
        name: "Electrochemistry",
        topics: [
          {
            id: "physical-chemistry-electrochemistry-metallic-electrolytic-conductors-determination-of-cell-constant-measur",
            name: "Metallic/Electrolytic Conductors Determination of Cell Constant Measurement of Conductance and Conductivity of Ionic Solutions Molar Conductivity Equivalent ConductivityEquivalent Conductivity",
          },
          {
            id: "physical-chemistry-electrochemistry-relation-between-molar-conductivity-and-equivalent-conductivity-variat",
            name: "Relation Between Molar Conductivity and Equivalent Conductivity Variation of Conductivity and Molar Conductivity with Concentration Kohlrausch's Law Absolute Ionic Mobilities and their Calculation",
          },
          {
            id: "physical-chemistry-electrochemistry-conductometric-titrations-commercial-cells-or-batteries-fuel-cells-hyd",
            name: "Conductometric Titrations Commercial Cells or Batteries Fuel Cells Hydrogen Economy Corrosion of Metals",
          },
          {
            id: "physical-chemistry-electrochemistry-introduction-electrochemical-cell-galvanic-cells-liquid-junction-poten",
            name: "Introduction Electrochemical Cell Galvanic Cells Liquid Junction Potential or Diffusion Potential",
          },
          {
            id: "physical-chemistry-electrochemistry-electrochemical-cell-electrodes-and-electrode-potential",
            name: "Electrochemical Cell electrodes and Electrode potential",
          },
          {
            id: "physical-chemistry-electrochemistry-electrochemical-cell-electrochemical-series",
            name: "Electrochemical Cell Electrochemical Series",
          },
          {
            id: "physical-chemistry-electrochemistry-nernst-equation",
            name: "Nernst Equation",
          },
          {
            id: "physical-chemistry-electrochemistry-equilibrium-constant-and-emf-gibbs-energy-of-the-reaction-application",
            name: "Equilibrium Constant and emf Gibbs Energy of the reaction Application of Nernst equation",
          },
          {
            id: "physical-chemistry-electrochemistry-various-types-of-half-cells-thermodynamics-of-galvanic-cell-concentrat",
            name: "Various types of half cells Thermodynamics of Galvanic cell Concentration Cell",
          },
          {
            id: "physical-chemistry-electrochemistry-electrolytes-electrolytic-cell-quantitative-aspects-of-electrolysis-an",
            name: "Electrolytes Electrolytic cell Quantitative Aspects of Electrolysis and Faraday's Laws",
          },
        ],
      },
    ],
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    group: "Chemistry",
    chapters: [
      {
        id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming",
        name: "Some Basic principles and Techniques (IUPAC Naming)",
        topics: [
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-tetravalency-of-carbon-shapes-of-simple-molecules-hybridization-s-and",
            name: "Tetravalency of carbon: Shapes of Simple molecules - hybridization (s and p): sigma & pi bonds",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-classification-of-organic-compounds-based-on-functional-groups-and-tho",
            name: "Classification of organic compounds based on functional groups: and those containing halogens, oxygen, nitrogen, and sulphur; Homologous series",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-degree-of-carbon-hydrogen-alcohol-amine-degree-of-unsaturation-functio",
            name: "Degree of Carbon, Hydrogen, Alcohol, Amine, Degree of Unsaturation, Functional Group",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-iupac-of-hydrocarbons-and-cycloalkanes",
            name: "IUPAC of Hydrocarbons & Cycloalkanes",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-iupac-of-functional-group-and-polyfunctional-group",
            name: "IUPAC of Functional Group and Polyfunctional Group",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-iupac-of-aromatic-compound",
            name: "IUPAC of Aromatic Compound",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-iupac-naming-of-bicyclo-and-spiro-compounds",
            name: "IUPAC Naming of Bicyclo & Spiro Compounds",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-common-naming",
            name: "Common Naming",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-iupac-naming-pyq-s",
            name: "PYQ'S",
          },
        ],
      },
      {
        id: "organic-chemistry-some-basic-principles-and-techniques-goc",
        name: "Some Basic principles and Techniques (GOC)",
        topics: [
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-covalent-bond-fission-homolytic-and-heterolytic-and-inductive-effect-b",
            name: "Covalent bond fission - Homolytic and heterolytic & Inductive Effect-Basic introduction",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-positive-and-negative-inductive-effect-and-its-application",
            name: "Positive and negative inductive effect and its application",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-hyperconjugation-application-of-hyperconjugation",
            name: "Hyperconjugation Application of Hyperconjugation",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-resonance-part-1",
            name: "Resonance (Part-1)",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-resonance-part-2-stability-of-resonating-structures",
            name: "Resonance (Part-2), Stability of resonating Structures",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-aromaticity-annulene",
            name: "Aromaticity, Annulene",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-mesomeric-effect",
            name: "Mesomeric Effect",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-stability-of-intermediates-bond-length-and-bond-strength",
            name: "Stability of Intermediates, Bond Length and Bond Strength",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-acidic-strength-basic-strength",
            name: "Acidic Strength Basic Strength",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-tautomerism-enol-content-electrophiles-and-nucleophiles-and-type-of-re",
            name: "Tautomerism ( Enol Content) electrophiles, and nucleophiles & Type of reactions Substitution, addition, elimination, and rearrangement.",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-purification-crystallization-sublimation-distillation-differential-ext",
            name: "Purification Crystallization, sublimation, distillation, differential extraction, and chromatography - principles and their applications.",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-qualitative-analysis",
            name: "Qualitative analysis",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-goc-pyq-s",
            name: "PYQ'S",
          },
        ],
      },
      {
        id: "organic-chemistry-some-basic-principles-and-techniques-isomerism",
        name: "Some Basic principles and Techniques (Isomerism)",
        topics: [
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-isomerism-and-type-of-isomerism-classification-and-structural-isomeris",
            name: "Isomerism & Type of Isomerism Classification and Structural Isomerism (Chain and Position)",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-structural-isomerism-metamers-functional",
            name: "Structural Isomerism (Metamers,Functional)",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-tautomerism",
            name: "Tautomerism",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-calculation-of-structural-isomerism-1",
            name: "Calculation of Structural Isomerism-1",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-calculation-of-structural-isomerism-2",
            name: "Calculation of Structural Isomerism-2",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-geometrical-isomerism-and-exhibition",
            name: "Geometrical isomerism & Exhibition",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-cis-trans-and-physical-property-z-e-cip-rule",
            name: "Cis trans & physical property Z/E CIP rule",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-special-cases-of-g-i-and-calculation-of-g-i",
            name: "Special cases of G.I and Calculation of G.I",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-conformations-sawhorse-and-newman-projections-of-ethane-butane-cyclohe",
            name: "Conformations: Sawhorse and Newman projections (of ethane, butane cyclohexane )",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-optical-isomerism-basics-polarimeter-experiment-and-chiral-centre-ster",
            name: "Optical isomerism: Basics Polarimeter experiment and Chiral Centre,Stereo Centre",
          },
          {
            id: "organic-chemistry-some-basic-principles-and-techniques-isomerism-pyq-s",
            name: "PYQ'S",
          },
        ],
      },
      {
        id: "organic-chemistry-hydrocarbon",
        name: "Hydrocarbon",
        topics: [
          {
            id: "organic-chemistry-hydrocarbon-method-of-preparation-of-alkane",
            name: "Method of Preparation of Alkane",
          },
          {
            id: "organic-chemistry-hydrocarbon-chemical-properties-of-alkane-mechanism-of-halogenation-of-alkanes-phy",
            name: "Chemical Properties of Alkane : Mechanism of halogenation of alkanes, Physical Properties of Alkane",
          },
          {
            id: "organic-chemistry-hydrocarbon-method-of-preparation-of-alkene-part-1-method-of-preparation-of-alkene",
            name: "Method of Preparation of Alkene (Part-1) Method of Preparation of Alkene (Part-2), Mechanism of electrophilic addition: addition of hydrogen, halogens",
          },
          {
            id: "organic-chemistry-hydrocarbon-mechanism-of-electrophilic-addition-water-hydrogen-halides-markownikof",
            name: "Mechanism of electrophilic addition: Water, hydrogen halides (Markownikoffs and peroxide effect)",
          },
          {
            id: "organic-chemistry-hydrocarbon-ozonolysis-and-polymerization",
            name: "Ozonolysis and polymerization.",
          },
          {
            id: "organic-chemistry-hydrocarbon-method-of-preparation-of-alkyne",
            name: "Method of Preparation of Alkyne",
          },
          {
            id: "organic-chemistry-hydrocarbon-chemical-properties-of-alkyne-acidic-character-addition-of-hydrogen-ha",
            name: "Chemical Properties of Alkyne : Acidic character: Addition of hydrogen, halogens, water, and hydrogen halides: Polymerization.",
          },
          {
            id: "organic-chemistry-hydrocarbon-mop-of-benzene-properties-of-benzene-mechanism-of-electrophilic-substi",
            name: "MOP of benzene - Properties of Benzene Mechanism of electrophilic substitution: halogenation, nitration. Friedel - Craft's alkylation and acylation, directive influence of the functional group in mono substituted benzene.",
          },
          {
            id: "organic-chemistry-hydrocarbon-pyqs",
            name: "PYQs",
          },
          {
            id: "organic-chemistry-hydrocarbon-introduction-alkane",
            name: "Introduction,Alkane",
          },
          {
            id: "organic-chemistry-hydrocarbon-preparation-of-alkane",
            name: "Preparation of alkane",
          },
          {
            id: "organic-chemistry-hydrocarbon-physical-properties-of-alkane",
            name: "Physical properties of alkane",
          },
          {
            id: "organic-chemistry-hydrocarbon-chemical-properties-of-alkane-uses-of-alkane",
            name: "Chemical properties of alkane Uses of Alkane",
          },
          {
            id: "organic-chemistry-hydrocarbon-preparation-of-alkene-properties-of-alkene-physical-properties-of-alke",
            name: "Preparation of alkene Properties of alkene Physical properties of alkene Chemical properties of alkene Uses of alkene Test of unsaturation of alkene",
          },
          {
            id: "organic-chemistry-hydrocarbon-preparation-of-alkyne-physical-properties-of-alkyne",
            name: "Preparation of alkyne,Physical properties of alkyne",
          },
          {
            id: "organic-chemistry-hydrocarbon-chemical-properties-of-alkyne-uses-of-alkyne",
            name: "Chemical properties of alkyne Uses of alkyne",
          },
          {
            id: "organic-chemistry-hydrocarbon-uses-of-alkyne-difference-between-internal-and-terminal-alkyne",
            name: "Uses of alkyne Difference between internal and terminal alkyne",
          },
          {
            id: "organic-chemistry-hydrocarbon-aromatic-hydrocarbon",
            name: "Aromatic hydrocarbon",
          },
          {
            id: "organic-chemistry-hydrocarbon-benzene-preparation-of-benzene",
            name: "Benzene,Preparation of benzene",
          },
          {
            id: "organic-chemistry-hydrocarbon-physical-properties-of-benzene",
            name: "Physical properties of benzene",
          },
          {
            id: "organic-chemistry-hydrocarbon-chemical-properties-of-benzene",
            name: "Chemical properties of benzene",
          },
          {
            id: "organic-chemistry-hydrocarbon-uses-of-benzene-electrophilic-substitution-of-a-monosubstituted-benzen",
            name: "Uses of benzene Electrophilic substitution of a monosubstituted benzene Physical properties",
          },
        ],
      },
      {
        id: "organic-chemistry-purification-and-analysis-of-organic-compound",
        name: "Purification and Analysis of Organic Compound",
        topics: [
          {
            id: "organic-chemistry-purification-and-analysis-of-organic-compound-methods-of-purification-of-organic-compounds-qualitative-analysis-of-o",
            name: "Methods of Purification of Organic Compounds Qualitative Analysis of Organic Compounds Detection of Other Elements Quantitative Analysis ESTIMATION OF Carbon and Hydrogen Nitrogen Halogens Sulphur Phosphorus Oxygen",
          },
        ],
      },
      {
        id: "organic-chemistry-environmental-chemistry",
        name: "Environmental Chemistry",
        topics: [
          {
            id: "organic-chemistry-environmental-chemistry-introduction-environmental-pollution-atmospheric-pollution-tropospheri",
            name: "Introduction ENVIRONMENTAL POLLUTION ATMOSPHERIC POLLUTION Tropospheric Pollution Acid rain Particulate Pollutants Smog Stratospheric Pollution Water pollution International Standards for Drinking Water Soil pollution Industrial waste Strategies to control environmental pollution Green chemistry Green Chemistry in day-to-day Life",
          },
        ],
      },
      {
        id: "organic-chemistry-structural-isomerism",
        name: "Structural Isomerism",
        topics: [
          {
            id: "organic-chemistry-structural-isomerism-type-of-isomerism-classification-and-structural-isomerism-chain-and-po",
            name: "Type of Isomerism Classification and Structural Isomerism (Chain and Position, Metamers,Functional, Ring Chain Isomerism)",
          },
        ],
      },
      {
        id: "organic-chemistry-conformations",
        name: "Conformations",
        topics: [
          {
            id: "organic-chemistry-conformations-conformations-sawhorse-and-newman-projections-of-ethane",
            name: "Conformations: Sawhorse and Newman projections of Ethane",
          },
          {
            id: "organic-chemistry-conformations-conformations-sawhorse-and-newman-projections-of-butane-and-cyclohexan",
            name: "Conformations: Sawhorse and Newman projections of Butane & Cyclohexane",
          },
        ],
      },
      {
        id: "organic-chemistry-geometrical-isomerism",
        name: "Geometrical isomerism",
        topics: [
          {
            id: "organic-chemistry-geometrical-isomerism-exhibition-of-g-i-types-of-g-i",
            name: "Exhibition of G.I. Types of G.I",
          },
          {
            id: "organic-chemistry-geometrical-isomerism-cip-rule-e-z-nomenclature",
            name: "CIP rule, E/Z Nomenclature",
          },
          {
            id: "organic-chemistry-geometrical-isomerism-physical-properties-of-g-i",
            name: "Physical properties of G.I.",
          },
        ],
      },
      {
        id: "organic-chemistry-optical-isomerism",
        name: "Optical Isomerism",
        topics: [
          {
            id: "organic-chemistry-optical-isomerism-types-of-symmetry-operations",
            name: "Types of symmetry operations",
          },
          {
            id: "organic-chemistry-optical-isomerism-chiral-and-stereo-centres",
            name: "Chiral and Stereo Centres",
          },
          {
            id: "organic-chemistry-optical-isomerism-r-s-nomenclature",
            name: "R/S nomenclature",
          },
          {
            id: "organic-chemistry-optical-isomerism-enantiomers-and-diastermers",
            name: "Enantiomers and Diastermers",
          },
          {
            id: "organic-chemistry-optical-isomerism-finding-meso-d-l-nomenclature",
            name: "Finding meso ,D/L nomenclature",
          },
          {
            id: "organic-chemistry-optical-isomerism-finding-the-relation-between-compounds",
            name: "Finding the relation between compounds",
          },
          {
            id: "organic-chemistry-optical-isomerism-calculation-of-stereoisomers",
            name: "Calculation of stereoisomers",
          },
          {
            id: "organic-chemistry-optical-isomerism-resolution-of-enantilmers-erythro-and-threo-polarimeter-tube-experimen",
            name: "Resolution of enantilmers ,Erythro and threo Polarimeter tube experiment",
          },
        ],
      },
      {
        id: "organic-chemistry-haloalkanes-and-haloarenes",
        name: "Haloalkanes and Haloarenes",
        topics: [
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-introduction",
            name: "Introduction",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-classification-of-haloalkanes-and-haloarenes",
            name: "Classification of Haloalkanes & Haloarenes",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-iupac-nomenclature-nature-of-c-x-bond",
            name: "IUPAC Nomenclature,Nature of C-X bond",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-method-of-preparation-of-haloalkanes",
            name: "Method of preparation of Haloalkanes",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-properties-of-haloalkanes",
            name: "Properties of Haloalkanes",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-nucleophilicity",
            name: "Nucleophilicity",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-reaction-with-metals",
            name: "Reaction with Metals",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-grignard-reagents",
            name: "Grignard Reagents",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-grignard-reagents-part-2",
            name: "Grignard Reagents Part 2",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-methods-of-preparation-of-haloarenes",
            name: "Methods of Preparation of Haloarenes",
          },
          {
            id: "organic-chemistry-haloalkanes-and-haloarenes-properties-of-haloarenes-pyqs-discussion",
            name: "Properties of Haloarenes PYQs Discussion",
          },
        ],
      },
      {
        id: "organic-chemistry-alcohols-phenols-and-ethers",
        name: "Alcohols, Phenols and Ethers",
        topics: [
          {
            id: "organic-chemistry-alcohols-phenols-and-ethers-reduction",
            name: "Reduction",
          },
          {
            id: "organic-chemistry-alcohols-phenols-and-ethers-oxidation",
            name: "Oxidation",
          },
          {
            id: "organic-chemistry-alcohols-phenols-and-ethers-poc",
            name: "POC",
          },
          {
            id: "organic-chemistry-alcohols-phenols-and-ethers-carbene-and-nitrene",
            name: "Carbene and Nitrene",
          },
        ],
      },
      {
        id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids",
        name: "Aldehydes, Ketones and Carboxylic Acids",
        topics: [
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-introduction-structure-of-carbonyl-group-nomenclature-methods-of-prepa",
            name: "Introduction Structure of Carbonyl group Nomenclature methods of preparation of aldehydes and ketones",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-methods-of-preparation-of-aldehydes-and-ketones-methods-of-preparation",
            name: "methods of preparation of aldehydes and ketones methods of preparation of aldehydes Only",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-methods-of-preparation-of-aldehydes-only-physical-properties-of-aldehy",
            name: "methods of preparation of aldehydes Only Physical Properties of aldehydes and ketones",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-chemical-reactions-of-aldehydes-and-ketones-nucleophilic-addition-reac",
            name: "Chemical Reactions of Aldehydes and Ketones Nucleophilic Addition Reaction",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-aldol-condensation-perkin-reaction-knoevenagel-condensation-reformatsk",
            name: "ALDOL CONDENSATION Perkin Reaction Knoevenagel Condensation Reformatsky Reaction",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-cannizzaro-reaction-tishchenko-reaction-benzil-benzilic-acid-rearrange",
            name: "Cannizzaro Reaction Tishchenko Reaction Benzil-benzilic Acid Rearrangement",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-benzoin-condensation-wittig-reaction-reduction-reactions-miscellaneous",
            name: "Benzoin Condensation Wittig reaction Reduction Reactions MISCELLANEOUS REACTIONS",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-analysis-of-aldehydes-and-ketones-tests-of-distinguish-b-w-aldehyde-an",
            name: "Analysis of Aldehydes and Ketones TESTS OF DISTINGUISH B/W ALDEHYDE & KETONE",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-other-miscellaneous-reactions-uses-of-aldehydes-and-ketones",
            name: "Other miscellaneous reactions USES OF ALDEHYDES AND KETONES",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-carboxylic-acids",
            name: "Carboxylic acids",
          },
          {
            id: "organic-chemistry-aldehydes-ketones-and-carboxylic-acids-naming-of-amides-and-imides-chemical-reactions-of-carboxylic-acid",
            name: "Naming of Amides and Imides Chemical Reactions of carboxylic acid",
          },
        ],
      },
      {
        id: "organic-chemistry-amines",
        name: "Amines",
        topics: [
          {
            id: "organic-chemistry-amines-physical-properties-and-poc",
            name: "Physical Properties and POC",
          },
        ],
      },
      {
        id: "organic-chemistry-biomolecules",
        name: "Biomolecules",
        topics: [
          {
            id: "organic-chemistry-biomolecules-introduction-carbohydrates-monosaccharides-glucose-epimers-fructose",
            name: "Introduction Carbohydrates Monosaccharides GLUCOSE EPIMERS Fructose",
          },
          {
            id: "organic-chemistry-biomolecules-comparison-between-glucose-and-fructose-kiliani-fischer-synthesis-chai",
            name: "Comparison between Glucose and Fructose Kiliani-Fischer Synthesis-Chain Elongation Disaccharides Sucrose (Cane Sugar)",
          },
          {
            id: "organic-chemistry-biomolecules-maltose-malt-sugar-lactose-milk-sugar-polysaccharides-carbohydrates-pr",
            name: "Maltose (Malt Sugar) Lactose (Milk Sugar) Polysaccharides Carbohydrates Proteins & Amino Acid",
          },
          {
            id: "organic-chemistry-biomolecules-structure-of-proteins-denaturation-of-proteins-vitamins-some-important",
            name: "Structure of Proteins Denaturation of Proteins VITAMINS Some important vitamins, their sources and the deficiency diseases NUCLEIC ACIDS Tests of Protein Test of Carbohydrates Uses of Proteins",
          },
        ],
      },
    ],
  },
  {
    id: "inorganic-chemistry",
    name: "Inorganic Chemistry",
    group: "Chemistry",
    chapters: [
      {
        id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties",
        name: "Classification of Elements and Periodicity in Properties",
        topics: [
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-need-for-classification-of-elements-historical-development-of-classifi",
            name: "Need for Classification of Elements,Historical Development of Classification of Elements,Magic Numbers",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-modern-periodic-law-and-present-form-of-the-periodic-table-merits-of-l",
            name: "Modern Periodic Law and Present Form of the Periodic Table,Merits of Long Form of Periodic Table Over Mendeleev's Periodic Table",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-electronic-configuration-of-elements-and-the-periodic-table",
            name: "Electronic Configuration of Elements and The Periodic Table",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-division-of-elements-into-s-p-d-and-f-blocks-and-their-characteristics",
            name: "Division of Elements into s, p, d and f Blocks, and Their Characteristics",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-classification-of-elements-as-metals-nonmetals-and-metalloids-anomalou",
            name: "Classification of Elements as Metals, Nonmetals and Metalloids Anomalous Properties of Second Period Elements Diagonal Relationship Bridge Elements Typical Elements Nomenclature of Elements With Atomic Number > 100",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-periodic-properties-screening-effect-effective-nuclear-charge",
            name: "Periodic Properties,Screening Effect,Effective Nuclear Charge",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-periodic-trends-in-physical-properties-periodic-properties",
            name: "Periodic Trends in Physical Properties,Periodic Properties",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-scales-of-electronegativity-factors-affecting-the-magnitude-of-electro",
            name: "Scales of Electronegativity,Factors affecting the magnitude of electronegativity",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-periodicity-in-electronegativity",
            name: "Periodicity in Electronegativity",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-application-of-electronegativity",
            name: "Application of Electronegativity",
          },
          {
            id: "inorganic-chemistry-classification-of-elements-and-periodicity-in-properties-oxides",
            name: "Oxides",
          },
        ],
      },
      {
        id: "inorganic-chemistry-chemical-bonding-and-molecular-structure",
        name: "Chemical Bonding and Molecular Structure",
        topics: [
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-introduction-ionic-or-electrovalent-bond-lattice-energy",
            name: "Introduction,Ionic or Electrovalent Bond,Lattice Energy",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-k-ssel-lewis-approach-to-chemical-bonding",
            name: "Kössel - Lewis Approach to Chemical Bonding",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-resonating-structure-resonance-energy",
            name: "Resonating Structure, Resonance Energy",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-valence-shell-electron-pair-repulsion-vsepr-theory",
            name: "Valence Shell Electron Pair Repulsion (VSEPR) Theory",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-valence-bond-theory-vbt",
            name: "Valence Bond Theory (VBT)",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-vsepr-theory",
            name: "VSEPR Theory",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-hybridisation",
            name: "Hybridisation",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-determination-of-number-of-p-pi-p-pi-bonds",
            name: "Determination of Number of [p(pi) - p(pi)] Bonds",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-dipole-moment",
            name: "Dipole Moment",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-polarisability-and-fajan-s-rule-polarity-of-covalent-bonds",
            name: "Polarisability and Fajan's Rule Polarity of Covalent Bonds",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-linear-combination-of-atomic-orbitals-lcao",
            name: "Linear Combination of Atomic Orbitals (LCAO)",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-molecular-orbital-theory-mot",
            name: "Molecular Orbital Theory (MOT)",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-shapes-of-the-molecular-orbitals",
            name: "Shapes of the Molecular Orbitals",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-bond-enthalpy-or-bond-dissociation-enthalpy",
            name: "Bond Enthalpy or Bond Dissociation Enthalpy",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-bond-parameters",
            name: "Bond Parameters",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-hydrogen-bonds-intermolecular-forces",
            name: "Hydrogen Bonds,Intermolecular Forces",
          },
          {
            id: "inorganic-chemistry-chemical-bonding-and-molecular-structure-back-bonding-bridge-bonding",
            name: "Back Bonding, Bridge bonding",
          },
        ],
      },
      {
        id: "inorganic-chemistry-p-block-elements-group-13-and-14",
        name: "P-block Elements (Group 13 and 14)",
        topics: [
          {
            id: "inorganic-chemistry-p-block-elements-group-13-and-14-group-13-elements-physical-properties",
            name: "Group 13 elements Physical Properties",
          },
          {
            id: "inorganic-chemistry-p-block-elements-group-13-and-14-chemical-properties-important-trends-and-anomalous-properties-of-boron",
            name: "Chemical Properties Important trends and anomalous properties of boron Some important compounds of boron",
          },
          {
            id: "inorganic-chemistry-p-block-elements-group-13-and-14-uses-of-boron-and-aluminium-and-their-compounds-group-14-elements-phys",
            name: "Uses of boron and aluminium and their compounds Group 14 elements Physical Properties of Group 14",
          },
          {
            id: "inorganic-chemistry-p-block-elements-group-13-and-14-chemical-properties-important-trends-and-anomalous-behaviour-of-carbon",
            name: "Chemical Properties Important trends and anomalous behaviour of carbon",
          },
          {
            id: "inorganic-chemistry-p-block-elements-group-13-and-14-allotropes-of-carbon-uses-of-carbon",
            name: "Allotropes of carbon Uses of Carbon",
          },
          {
            id: "inorganic-chemistry-p-block-elements-group-13-and-14-some-important-compounds-of-carbon-and-silicon",
            name: "Some important compounds of carbon and silicon",
          },
        ],
      },
      {
        id: "inorganic-chemistry-s-block-element",
        name: "S-block Element",
        topics: [
          {
            id: "inorganic-chemistry-s-block-element-group-1-elements-physical-properties-of-group-1-elements-chemical-prop",
            name: "Group 1 Elements Physical Properties of Group 1 Elements Chemical Properties of Group 1 Elements Uses of Group 1 elements",
          },
          {
            id: "inorganic-chemistry-s-block-element-general-characteristics-of-the-compounds-of-the-alkali-metals-anomalou",
            name: "General characteristics of the compounds of the alkali metals Anomalous properties of lithium Some important compounds of sodium Biological importance of sodium and potassium Group 2 elements Physical properties of group 2 elements",
          },
        ],
      },
      {
        id: "inorganic-chemistry-hydrogen-and-its-compound",
        name: "Hydrogen and its Compound",
        topics: [
          {
            id: "inorganic-chemistry-hydrogen-and-its-compound-position-of-hydrogen-in-the-periodic-table-hydrogen-isotopes-of-hydrog",
            name: "Position of Hydrogen in the Periodic Table Hydrogen Isotopes of Hydrogen Preparation of Dihydrogen, H2 Physical properties of Dihydrogen Chemical properties of Dihydrogen Uses of Dihydrogen Hydrides Water & Permanent Hardness",
          },
        ],
      },
      {
        id: "inorganic-chemistry-coordination-compounds",
        name: "Coordination Compounds",
        topics: [
          {
            id: "inorganic-chemistry-coordination-compounds-shape-1-double-salt-2-co-ordination-or-complex-compounds-i-perfect-com",
            name: "Shape 1. Double salt 2. Co-ordination or Complex Compounds I. Perfect Complex II. Imperfect complex",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-various-terms-used-in-co-ordination-compound",
            name: "Various terms used in co-ordination compound",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-classification-of-ligand",
            name: "Classification of ligand",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-werner-theory-effective-atomic-number-nomenclature-of-coordination-com",
            name: "Werner theory Effective atomic number Nomenclature of coordination compound Valence bond theory",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-valence-bond-theory",
            name: "Valence bond theory",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-crystal-field-theory",
            name: "Crystal field theory",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-stability-of-complexes",
            name: "Stability of complexes",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-isomerism-in-coordination-compounds",
            name: "Isomerism in coordination compounds",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-isomerism-in-coordination-compounds-organometallic-compounds",
            name: "Isomerism in coordination compounds Organometallic compounds",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-application-of-coordination-compounds-isomerism-in-coordination-compou",
            name: "Application of Coordination compounds Isomerism in coordination compounds",
          },
          {
            id: "inorganic-chemistry-coordination-compounds-organometallic-compounds-application-of-coordination-compounds",
            name: "Organometallic compounds Application of Coordination compounds",
          },
        ],
      },
      {
        id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis",
        name: "Principles of Qualitative Analysis:Salt analysis",
        topics: [
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-introduction-analysis-of-anions-acid-radicals-individual-test-of-anion",
            name: "Introduction ANALYSIS OF ANIONS (ACID RADICALS) INDIVIDUAL TEST OF ANIONS CLASS A RADICALS:GROUP 1",
          },
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-group-i-involves-anions-which-evolve-gases-on-reaction-with-dil-hcl-di",
            name: "Group I involves anions which evolve gases on reaction with dil. HCl/dil. H2SO4",
          },
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-class-b-radicals-group-ii-radicals-detected-with-their-salts-solutions",
            name: "CLASS B RADICALS: Group II RADICALS DETECTED WITH THEIR SALTS SOLUTIONS",
          },
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-analysis-of-cations-basic-radicals",
            name: "ANALYSIS OF CATIONS (BASIC RADICALS)",
          },
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-separation-of-cations",
            name: "Separation of Cations",
          },
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-identification-of-basic-radical",
            name: "Identification of Basic Radical",
          },
          {
            id: "inorganic-chemistry-principles-of-qualitative-analysis-salt-analysis-some-important-concept",
            name: "Some Important Concept",
          },
        ],
      },
      {
        id: "inorganic-chemistry-the-p-block-elements-xii",
        name: "The p-Block Elements (XII)",
        topics: [
          {
            id: "inorganic-chemistry-the-p-block-elements-xii-group-15-elements-the-nitrogen-family-occurence-oxidation-states-and-t",
            name: "GROUP 15 ELEMENTS : THE NITROGEN FAMILY OCCURENCE Oxidation States and Their Stability Anomalous Properties of Nitrogen CHEMICAL PROPERTIES DINITROGEN COMPOUNDS OF NITROGEN",
          },
          {
            id: "inorganic-chemistry-the-p-block-elements-xii-oxoacids-of-nitrogen-allotropes-of-phosphorous-compounds-of-phosphorus",
            name: "Oxoacids Of Nitrogen Allotropes Of Phosphorous COMPOUNDS OF PHOSPHORUS Halides Of Phosphorous Oxoacids Of Phosphorous",
          },
          {
            id: "inorganic-chemistry-the-p-block-elements-xii-group-16-elements-the-oxygen-family-chemical-properties-dioxygen-o2-ox",
            name: "GROUP 16 ELEMENTS: THE OXYGEN FAMILY Chemical Properties DIOXYGEN (O2) OXIDES OZONE SULPHUR (S) COMPOUNDS OF SULPHUR",
          },
          {
            id: "inorganic-chemistry-the-p-block-elements-xii-oxides-of-sulphur-group-17-elements-the-halogen-family",
            name: "Oxides of Sulphur GROUP 17 ELEMENTS: THE HALOGEN FAMILY",
          },
          {
            id: "inorganic-chemistry-the-p-block-elements-xii-anomalous-behaviour-of-fluorine-chlorine-cl-2-hydrogen-chloride-pseudo",
            name: "Anomalous Behaviour of Fluorine CHLORINE (Cl 2) HYDROGEN CHLORIDE PSEUDOHALOGENS AND PSEUDOHALIDES",
          },
          {
            id: "inorganic-chemistry-the-p-block-elements-xii-interhalogen-compounds-oxyacids-of-halogens-group-18-elements-the-zero",
            name: "Interhalogen Compounds OXYACIDS OF HALOGENS GROUP 18 ELEMENTS: (THE ZERO GROUP FAMILY) Group 18 Elements COMPOUNDS OF XENON",
          },
        ],
      },
      {
        id: "inorganic-chemistry-the-d-and-f-block-elements",
        name: "The d and f-Block Elements",
        topics: [
          {
            id: "inorganic-chemistry-the-d-and-f-block-elements-introduction-position-in-the-periodic-table-electronic-configuration-o",
            name: "Introduction Position in the Periodic Table Electronic Configuration of the d-Block Elements Electronic Configuration of the d-Block Elements Physical Properties General Properties of Transition Elements (d-Block)",
          },
          {
            id: "inorganic-chemistry-the-d-and-f-block-elements-some-useful-compounds-of-transition-elements-the-lanthanides",
            name: "Some Useful Compounds of Transition Elements The Lanthanides",
          },
        ],
      },
    ],
  },
]
