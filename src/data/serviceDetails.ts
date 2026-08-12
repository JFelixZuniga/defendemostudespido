// Legal detail content per service, ported verbatim from the source design
// (Servicio.dc.html). Used by /servicio/[slug].astro.

export interface Law {
  ref: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  aboutHeading: string;
  about: string[];
  bullets: string[];
  aboutAfter: string[];
  closing: string;
  laws: Law[];
  recoverHeading: string;
  recover: string[];
  deadline: string;
  deadlineNote: string;
  faqs: Faq[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'despido-injustificado': {
    aboutHeading: 'No todos los despidos cumplen con los requisitos de la ley',
    about: [
      'Cuando un empleador pone término a tu contrato invocando una causal sin fundamentos suficientes, sin hechos reales o sin poder acreditar los hechos que invoca, puedes reclamar judicialmente ante los Tribunales Laborales.',
      'Un despido puede ser declarado injustificado, indebido o improcedente cuando, por ejemplo:',
    ],
    bullets: [
      'La empresa invoca una causal como "necesidades de la empresa", pero no logra demostrar los hechos objetivos que justificaban tu despido.',
      'Te despiden por una supuesta falta grave o incumplimiento contractual, pero los hechos señalados en la carta de despido no existen, no son suficientes o no logran ser acreditados.',
      'Te despiden por supuestas faltas injustificadas, pero contabas con licencia médica u otra justificación válida para tus ausencias.',
      'El empleador no cumple con las formalidades legales del despido, como entregar una carta por escrito indicando la causal invocada y los hechos concretos que la fundamentan.',
    ],
    aboutAfter: [
      'También existen casos de despido verbal, cuando después de una discusión simplemente te indican "no vengas más", dejan de asignarte funciones o te impiden ingresar a tu lugar de trabajo sin entregarte una comunicación formal.',
      'La ley exige que el despido sea comunicado por escrito, indicando claramente la causal y los hechos en que se basa. El incumplimiento de esta obligación puede afectar seriamente la defensa del empleador durante un juicio laboral.',
      'Si el tribunal determina que el despido fue injustificado, indebido o improcedente, puedes tener derecho a un aumento de tu indemnización por años de servicio mediante los recargos legales correspondientes, los cuales pueden alcanzar desde un 30% hasta un 100% según la causal aplicada.',
    ],
    closing:
      '¿Crees que tu despido pudo ser injustificado? Envíanos tu carta de despido y revisaremos si existen fundamentos para reclamar tus derechos.',
    laws: [
      { ref: 'Art. 159–161 C. del Trabajo', text: 'Establecen las causales de término del contrato. Si ninguna concurre o no se prueba, el despido carece de justificación.' },
      { ref: 'Art. 162 C. del Trabajo', text: 'Obliga a comunicar el despido por escrito, señalando la causal y los hechos. El despido verbal incumple este deber.' },
      { ref: 'Art. 168 C. del Trabajo', text: 'Permite reclamar ante el Juzgado del Trabajo y fija los recargos: 30% (necesidades de la empresa), 50% (causal injustificada) y hasta 80%–100% en causales de caducidad mal aplicadas.' },
    ],
    recoverHeading: '¿Qué puedes recuperar?',
    recover: [
      'Indemnización por años de servicio, con el recargo legal correspondiente',
      'Indemnización sustitutiva del aviso previo (mes de desahucio)',
      'Feriado legal y proporcional pendiente',
      'Remuneraciones y cotizaciones adeudadas al término',
    ],
    deadline: '60 días hábiles',
    deadlineNote: 'Contados desde la separación para demandar. El plazo se suspende si reclamas ante la Inspección del Trabajo, con un tope máximo de 90 días hábiles.',
    faqs: [
      { q: 'Me despidieron de forma verbal, ¿tengo cómo probarlo?', a: 'Sí. La ausencia de carta de despido juega a tu favor, y podemos acreditar el término con testigos, mensajes, el cese de acceso a tu lugar de trabajo o el no pago de remuneraciones. Escríbenos y revisamos qué evidencia tienes.' },
      { q: 'El finiquito decía "necesidades de la empresa", ¿es válido?', a: 'Depende. El empleador debe probar la causal; si no puede, el despido es injustificado y procede un recargo del 30% sobre tu indemnización por años de servicio.' },
      { q: '¿Cuánto podría corresponderme?', a: 'Varía según tu remuneración y antigüedad. En una primera evaluación gratuita estimamos un rango realista de lo que podrías recuperar.' },
    ],
  },
  'tutela-laboral': {
    aboutHeading: '¿Tu empleador vulneró tus derechos? La ley también te protege dentro del trabajo',
    about: [
      'Tu relación laboral no solo implica obligaciones, también garantiza el respeto de tus derechos fundamentales como persona.',
      'La tutela laboral es el mecanismo que permite proteger a los trabajadores cuando el empleador vulnera derechos como:',
    ],
    bullets: [
      'La integridad física o psíquica.',
      'La honra y dignidad del trabajador.',
      'La libertad de expresión.',
      'El derecho a no ser discriminado.',
      'La garantía de indemnidad, que protege frente a represalias por reclamar, denunciar irregularidades o ejercer tus derechos laborales.',
    ],
    aboutAfter: [
      'Esta acción puede aplicarse durante la relación laboral, por ejemplo, ante situaciones de acoso laboral, acoso sexual, discriminación, hostigamiento o actos de menoscabo, y también después del término del contrato, cuando el despido constituye una represalia o una vulneración de derechos fundamentales.',
      'Si el tribunal determina que existió una vulneración, además de las indemnizaciones correspondientes por el término de la relación laboral, puede ordenar el pago de una indemnización adicional especial, cuyo monto puede variar entre 6 y 11 remuneraciones mensuales, según lo determine el juez.',
    ],
    closing:
      '¿Crees que tu despido estuvo relacionado con una represalia, discriminación o vulneración de tus derechos? Envíanos tu caso y revisaremos si existen antecedentes para ejercer una acción de tutela laboral.',
    laws: [
      { ref: 'Art. 485–495 C. del Trabajo', text: 'Regulan el procedimiento de tutela de derechos fundamentales y la indemnización especial de 6 a 11 remuneraciones.' },
      { ref: 'Art. 2 C. del Trabajo', text: 'Prohíbe los actos de discriminación y reconoce el respeto a la dignidad del trabajador como principio rector.' },
      { ref: 'Art. 184 C. del Trabajo', text: 'Impone al empleador el deber de proteger eficazmente la vida y salud de sus trabajadores.' },
    ],
    recoverHeading: '¿Qué puedes obtener?',
    recover: [
      'Indemnización especial de 6 a 11 remuneraciones mensuales',
      'Indemnización por años de servicio y recargo (si hubo despido)',
      'Reparación por el daño a tus derechos fundamentales',
      'Sanción y medidas correctivas contra el empleador',
    ],
    deadline: '60 días hábiles',
    deadlineNote: 'Desde la vulneración o el despido para interponer la denuncia de tutela. El plazo se suspende con el reclamo ante la Inspección del Trabajo.',
    faqs: [
      { q: '¿Qué se considera acoso laboral?', a: 'Toda conducta que constituya agresión, hostigamiento o maltrato que afecte a un trabajador/a, ya sea por parte de su empleador o de uno o más compañeros de trabajo.\n\nPuede ocurrir una sola vez o de manera reiterada y puede manifestarse de distintas formas: humillaciones frente a otros compañeros, malos tratos, amenazas, hostigamiento o conductas que afecten la dignidad, salud mental, situación laboral u oportunidades de empleo de la persona.\n\nEl acoso laboral también puede producirse a través de medios digitales, como mensajes de WhatsApp, correos electrónicos o plataformas de comunicación laboral.' },
      { q: '¿Puedo denunciar aunque siga trabajando?', a: 'Sí. La tutela procede durante la relación laboral y la ley te protege especialmente contra represalias (garantía de indemnidad) por haber denunciado.' },
      { q: '¿Necesito pruebas contundentes?', a: 'La tutela tiene un régimen de prueba favorable al trabajador: basta aportar indicios suficientes para que sea el empleador quien deba justificar su conducta. Revisamos contigo qué indicios reunir.' },
    ],
  },
  autodespido: {
    aboutHeading: '¿Tu empleador incumplió gravemente sus obligaciones? No estás obligado a renunciar',
    about: [
      'Cuando es el empleador quien incumple gravemente el contrato de trabajo, la ley permite al trabajador poner término a la relación laboral y reclamar las indemnizaciones que correspondan.',
      'Renunciar voluntariamente puede significar perder importantes beneficios económicos, como la indemnización por años de servicio. En cambio, el autodespido o despido indirecto permite al trabajador terminar el contrato atribuyendo la responsabilidad al empleador cuando existen incumplimientos graves.',
      'Puedes recurrir a esta herramienta, por ejemplo, cuando el empleador:',
    ],
    bullets: [
      'No paga remuneraciones o prestaciones laborales.',
      'Mantiene cotizaciones previsionales impagas.',
      'Incumple gravemente las obligaciones del contrato.',
      'Realiza actos de maltrato, hostigamiento o vulneración de derechos.',
      'No proporciona el trabajo convenido o altera gravemente las condiciones laborales.',
    ],
    aboutAfter: [
      'Para ejercer esta acción, el trabajador debe comunicar por escrito el término del contrato indicando los hechos que fundamentan la decisión y posteriormente recurrir al Tribunal Laboral para que determine si el autodespido fue justificado.',
      'Si el tribunal acoge la demanda, el trabajador puede acceder a las mismas indemnizaciones correspondientes a un despido injustificado, incluyendo los recargos legales aplicables sobre la indemnización por años de servicio.',
    ],
    closing:
      '¿Tu empleador está incumpliendo gravemente tu contrato? Escríbenos y evaluaremos si el autodespido es la vía adecuada para tu caso.',
    laws: [
      { ref: 'Art. 171 C. del Trabajo', text: 'Autoriza al trabajador a poner término al contrato cuando el empleador incurre en las causales del art. 160, con derecho a indemnización y recargos.' },
      { ref: 'Art. 160 C. del Trabajo', text: 'Enumera los incumplimientos graves imputables al empleador que habilitan el autodespido.' },
      { ref: 'Art. 162 C. del Trabajo', text: 'Exige comunicar el término por escrito, indicando la causal y los hechos, dentro de los plazos legales.' },
    ],
    recoverHeading: '¿Qué puedes cobrar?',
    recover: [
      'Indemnización por años de servicio, con recargo del 50% u 80%',
      'Indemnización sustitutiva del aviso previo',
      'Remuneraciones y cotizaciones adeudadas',
      'Feriado legal y proporcional pendiente',
    ],
    deadline: '60 días hábiles',
    deadlineNote: 'Desde la fecha en que comunicas el autodespido para demandar. Es clave documentar los incumplimientos antes de dar el paso: podemos asesorarte previamente.',
    faqs: [
      { q: '¿Es lo mismo que renunciar?', a: 'No, es lo contrario. Al renunciar pierdes tus indemnizaciones; con el autodespido responsabilizas al empleador por su incumplimiento y conservas el derecho a cobrarlas.' },
      { q: 'No me pagan las cotizaciones, ¿puedo autodespedirme?', a: 'El no pago de cotizaciones puede constituir un incumplimiento grave. Conviene evaluar la gravedad y reunir respaldo antes de comunicar el término; te guiamos en ese proceso.' },
      { q: '¿Y si el tribunal no acoge la causal?', a: 'Por eso es importante una evaluación previa seria. Analizamos la solidez de tu caso antes de recomendar el autodespido, para no exponerte a un mal resultado.' },
    ],
  },
  'nulidad-despido': {
    aboutHeading: 'Si tus cotizaciones no estaban pagadas, el empleador puede enfrentar graves consecuencias',
    about: [
      'Al momento de despedirte, tu empleador debe tener completamente pagadas tus cotizaciones previsionales. Si existen cotizaciones pendientes de pago, el término de la relación laboral puede quedar sin efecto mientras el empleador no regularice su situación previsional.',
      'La denominada Ley Bustos establece que el empleador que despide a un trabajador manteniendo cotizaciones impagas debe cumplir con la obligación de pagarlas y acreditar su regularización para que el despido produzca plenamente sus efectos.',
      'Esta situación puede ocurrir cuando existen deudas en:',
    ],
    bullets: ['Cotizaciones de AFP.', 'Cotizaciones de salud (Fonasa o Isapre).', 'Seguro de cesantía.'],
    aboutAfter: [
      'Si el empleador no estaba al día con tus cotizaciones al momento del despido, puede quedar obligado a pagar tus remuneraciones y demás prestaciones laborales desde la fecha del término del contrato hasta la convalidación del despido, es decir, hasta que regularice íntegramente las cotizaciones adeudadas.',
      'Además, esta acción puede acumularse con otras demandas laborales, como despido injustificado, cobro de prestaciones adeudadas o tutela laboral, dependiendo de los antecedentes del caso.',
    ],
    closing:
      '¿Fuiste despedido y no sabes si tus cotizaciones estaban pagadas? Envíanos tus antecedentes y revisaremos si tu empleador cumplió con sus obligaciones previsionales.',
    laws: [
      { ref: 'Art. 162 inc. 5–7 C. del Trabajo', text: 'Establece que el despido no produce efecto si no están pagadas las cotizaciones, obligando a pagar remuneraciones hasta la convalidación.' },
      { ref: 'Ley N° 19.631 (Ley Bustos)', text: 'Introdujo la sanción de nulidad del despido por cotizaciones previsionales impagas.' },
      { ref: 'Art. 480 C. del Trabajo', text: 'Regula los plazos de prescripción de las acciones laborales aplicables al cobro.' },
    ],
    recoverHeading: '¿Qué puedes reclamar?',
    recover: [
      'Remuneraciones desde el despido hasta la convalidación',
      'Pago íntegro de las cotizaciones previsionales adeudadas',
      'Indemnizaciones propias del despido injustificado',
      'Cotizaciones de salud y seguro de cesantía pendientes',
    ],
    deadline: '6 meses',
    deadlineNote: 'Plazo referencial para las acciones asociadas a la nulidad del despido desde la suspensión de la relación laboral. Cada caso tiene matices; conviene revisarlo cuanto antes.',
    faqs: [
      { q: '¿Cómo sé si me deben cotizaciones?', a: 'Puedes revisar tus cartolas de AFP, Fonasa/Isapre y AFC. Si detectas lagunas coincidentes con tu periodo trabajado, es un fuerte indicio. Podemos ayudarte a verificarlo.' },
      { q: '¿Hasta cuándo debe pagarme el empleador?', a: 'Hasta que convalide el despido, esto es, hasta que pague la totalidad de las cotizaciones adeudadas y te lo comunique por escrito con los respaldos correspondientes.' },
      { q: '¿Se suma a la indemnización normal?', a: 'Sí. La nulidad del despido es compatible con las indemnizaciones por despido injustificado, lo que suele aumentar significativamente el monto total.' },
    ],
  },
  'accidentes-trabajo': {
    aboutHeading: 'Cuando tu salud se ve afectada por el trabajo, tienes derecho a ser protegido',
    about: [
      'Un accidente laboral o una enfermedad causada por las condiciones de trabajo puede cambiar completamente tu vida. Si el daño se produjo porque el empleador no cumplió con su deber de seguridad y prevención, puedes tener derecho a reclamar una indemnización adicional por los perjuicios sufridos.',
      'La Ley 16.744 reconoce como accidente del trabajo toda lesión que una persona sufra a causa o con ocasión de sus labores, incluyendo los accidentes ocurridos durante el trayecto entre el domicilio y el lugar de trabajo. Por su parte, una enfermedad profesional es aquella causada directamente por el ejercicio de la actividad laboral o por las condiciones en que esta se desarrolla.',
      'Estos eventos se encuentran cubiertos por el seguro de la Ley N°16.744, que contempla prestaciones como:',
    ],
    bullets: [
      'Atención médica y rehabilitación.',
      'Subsidios por incapacidad laboral.',
      'Indemnizaciones o pensiones según el grado de incapacidad.',
      'Daño moral: por el dolor, sufrimiento, afectación emocional y pérdida de calidad de vida ocasionada por el accidente o enfermedad.',
      'Lucro cesante: por los ingresos que el trabajador deja de percibir producto de las secuelas o limitaciones que afectan su capacidad laboral.',
    ],
    aboutAfter: [
      'Sin embargo, cuando el accidente o la enfermedad se producen porque el empleador incumplió su obligación legal de proteger eficazmente la vida y salud del trabajador, es posible ejercer acciones judiciales para solicitar una indemnización de perjuicios, reclamando entre otros conceptos el daño moral y el lucro cesante.',
      'La evaluación de estos perjuicios dependerá de factores como la gravedad del daño, las consecuencias en la vida personal y laboral del trabajador, y la responsabilidad que pueda atribuirse al empleador.',
    ],
    closing:
      '¿Sufriste un accidente laboral o desarrollaste una enfermedad producto de tu trabajo? Revisemos tu caso y evaluemos si existen antecedentes para exigir una reparación por los daños sufridos.',
    laws: [
      { ref: 'Ley N° 16.744', text: 'Establece el seguro social obligatorio contra accidentes del trabajo y enfermedades profesionales, y sus prestaciones.' },
      { ref: 'Art. 184 C. del Trabajo', text: 'Obliga al empleador a adoptar todas las medidas necesarias para proteger eficazmente la vida y salud de los trabajadores.' },
      { ref: 'Art. 69 Ley 16.744', text: 'Habilita a demandar al empleador por las demás indemnizaciones, incluido el daño moral, cuando hubo culpa o dolo.' },
    ],
    recoverHeading: '¿Qué puedes reclamar?',
    recover: [
      'Indemnización por daño moral',
      'Lucro cesante por la pérdida de capacidad de ganancia',
      'Prestaciones médicas y subsidios de la Ley 16.744',
      'Pensión por incapacidad permanente, según el grado',
    ],
    deadline: '5 años',
    deadlineNote: 'Plazo de prescripción referencial para las acciones derivadas de accidentes del trabajo y enfermedades profesionales. Mientras antes actúes, mejor se conserva la prueba.',
    faqs: [
      { q: 'El accidente fue de trayecto, ¿está cubierto?', a: 'Sí. Los accidentes ocurridos en el trayecto directo entre el hogar y el trabajo (y viceversa) están cubiertos por la Ley 16.744.' },
      { q: '¿Puedo demandar además del seguro?', a: 'Sí. Si hubo culpa o negligencia del empleador en las condiciones de seguridad, puedes demandar el daño moral y el lucro cesante, de forma adicional a las prestaciones del seguro.' },
      { q: '¿Y las enfermedades por el trabajo?', a: 'Las enfermedades profesionales (por ejemplo, por sobreesfuerzo, ruido o exposición a agentes) también dan derecho a prestaciones e indemnización cuando se acredita el origen laboral.' },
    ],
  },
  finiquito: {
    aboutHeading: 'Finiquito mal calculado o no pagado: revisa antes de firmar',
    about: [
      'El finiquito es el documento que deja constancia del término de la relación laboral y de las prestaciones que el empleador paga al trabajador. Sin embargo, en la práctica es frecuente encontrar errores como:',
    ],
    bullets: [
      'Indemnización por años de servicio mal calculada.',
      'Días trabajados pendientes de pago.',
      'Feriado legal o proporcional pendiente de pago.',
      'Horas extraordinarias pendientes de pago.',
      'Descuentos que no corresponden.',
      'Diferencias en remuneraciones u otras prestaciones adeudadas.',
    ],
    aboutAfter: [
      'Firmar un finiquito sin revisarlo puede limitar la posibilidad de reclamar posteriormente, ya que este documento puede tener efecto liberatorio respecto de las materias que no fueron reservadas.',
      'Por eso, antes de firmar es fundamental revisar si los montos ofrecidos son correctos y, si existen diferencias o dudas, incorporar una reserva de derechos clara y específica que permita reclamar posteriormente aquello que corresponda.',
    ],
    closing:
      '¿Te entregaron un finiquito y no sabes si lo que te ofrecen pagar está correcto? Envíanos el documento y revisaremos si existen montos o derechos que se puedan reclamar. No pierdas la oportunidad de hacerlo.',
    laws: [
      { ref: 'Art. 177 C. del Trabajo', text: 'Regula el finiquito, su ratificación ante ministro de fe y su poder liberatorio. Permite la reserva de derechos.' },
      { ref: 'Art. 73 C. del Trabajo', text: 'Establece el derecho al feriado legal y su compensación en dinero al término del contrato.' },
      { ref: 'Art. 63 C. del Trabajo', text: 'Fija reajustes e intereses sobre las sumas adeudadas y no pagadas oportunamente.' },
    ],
    recoverHeading: '¿Qué solemos detectar?',
    recover: [
      'Feriado legal y proporcional mal calculado o no pagado',
      'Años de servicio subvalorados o incompletos',
      'Descuentos indebidos (seguro de cesantía, anticipos)',
      'Semana corrida, gratificaciones y bonos omitidos',
    ],
    deadline: 'Antes de firmar',
    deadlineNote: 'Idealmente revisamos el finiquito antes de que lo firmes. Si ya firmaste con reserva de derechos, aún puedes demandar las diferencias; consúltanos con urgencia.',
    faqs: [
      { q: 'Ya firmé el finiquito, ¿puedo reclamar?', a: 'Si lo firmaste con la reserva de derechos adecuada, sí podemos demandar las diferencias. Aunque no la hayas hecho, revisamos si el documento cumplió las formalidades legales.' },
      { q: '¿Qué es la reserva de derechos?', a: 'Es una anotación en el finiquito indicando que aceptas el pago pero te reservas el derecho a reclamar montos que consideras pendientes. Evita que el finiquito tenga efecto liberatorio total.' },
      { q: '¿Cuánto cuesta que revisen mi finiquito?', a: 'La primera revisión es sin costo inicial. Solo cobramos si logramos recuperar diferencias a tu favor.' },
    ],
  },
  'comparendo-inspeccion': {
    aboutHeading: 'Asiste preparado: lo que ocurre en el comparendo influye en todo el conflicto',
    about: [
      'Si fuiste despedido y presentaste un reclamo ante la Inspección del Trabajo, serás citado a un comparendo de conciliación junto con tu empleador.',
      'Esta instancia tiene como objetivo que ambas partes puedan revisar la situación laboral, plantear sus argumentos y buscar un eventual acuerdo antes de iniciar un juicio laboral.',
      'Sin embargo, es importante asistir preparado. Lo que declares, los documentos que presentes y la forma en que plantees tus pretensiones pueden influir en las etapas posteriores del conflicto.',
      'Nuestro equipo te acompaña y te representa directamente ante la Inspección del Trabajo, preparando tu caso, revisando los antecedentes laborales, participando en el comparendo y defendiendo tus derechos frente al empleador. Analizamos la carta de despido, el finiquito, las remuneraciones pendientes, las cotizaciones previsionales y todos los antecedentes necesarios para definir la mejor estrategia.',
    ],
    bullets: [],
    aboutAfter: [],
    closing: '¿Tienes un comparendo en la Inspección del Trabajo y te preocupa enfrentarlo? Contáctanos.',
    laws: [
      { ref: 'Art. 168 C. del Trabajo', text: 'El reclamo administrativo ante la Inspección del Trabajo suspende el plazo para demandar, con un tope de 90 días hábiles.' },
      { ref: 'Art. 474 C. del Trabajo', text: 'Regula la actuación fiscalizadora y sancionatoria de la Dirección del Trabajo frente a infracciones laborales.' },
      { ref: 'DFL N° 2 de 1967', text: 'Fija las atribuciones de la Dirección del Trabajo, incluida la mediación y conciliación entre trabajador y empleador.' },
    ],
    recoverHeading: '¿En qué te ayudamos?',
    recover: [
      'Preparación de tu caso y de los antecedentes a presentar',
      'Representación directa en el comparendo de conciliación',
      'Revisión de finiquito, remuneraciones y cotizaciones',
      'Estrategia para la etapa judicial si no hay acuerdo',
    ],
    deadline: 'Fecha de la citación',
    deadlineNote: 'El comparendo se fija en la citación que te entrega la Inspección del Trabajo. Contáctanos antes de la audiencia para preparar tu caso con tiempo.',
    faqs: [
      { q: '¿Es obligatorio asistir al comparendo?', a: 'Tu asistencia es fundamental: si no concurres, pierdes la oportunidad de plantear tus pretensiones y de alcanzar un acuerdo en esta etapa. Podemos acompañarte o representarte.' },
      { q: '¿Puedo ir con abogado?', a: 'Sí. Puedes asistir acompañado o representado por un abogado, lo que suele mejorar significativamente tu posición frente al empleador.' },
      { q: '¿Si llego a acuerdo puedo demandar después?', a: 'Depende de los términos del acuerdo. Por eso es clave revisar qué estás aceptando antes de firmar cualquier acta de conciliación.' },
    ],
  },
};
