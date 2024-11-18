// pages/privacy-policy.tsx (o app/privacy-policy/page.tsx para la nueva estructura)
import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">Política de Privacidad</h1>
      <p className="mb-4">
        En <strong>TuEmpresa</strong>, valoramos tu privacidad y estamos
        comprometidos a proteger la información personal que compartes con
        nosotros. Esta Política de Privacidad describe cómo recopilamos, usamos
        y protegemos tus datos.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Información que recopilamos
      </h2>
      <p className="mb-4">
        Podemos recopilar información personal como tu nombre, correo
        electrónico, dirección y cualquier otra información que proporciones al
        registrarte o interactuar con nuestro servicio.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Cómo usamos tu información
      </h2>
      <ul className="mb-4 list-inside list-disc">
        <li>Para proporcionar y mejorar nuestros servicios.</li>
        <li>
          Para comunicarnos contigo, incluyendo enviar actualizaciones
          importantes.
        </li>
        <li>Para cumplir con requisitos legales o regulatorios.</li>
      </ul>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Cómo protegemos tu información
      </h2>
      <p className="mb-4">
        Implementamos medidas de seguridad técnicas y organizativas para
        proteger tu información contra el acceso no autorizado, pérdida o uso
        indebido.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">Tus derechos</h2>
      <p className="mb-4">
        Tienes derecho a acceder, actualizar o eliminar tu información personal.
        Si deseas ejercer estos derechos, contáctanos en{' '}
        <strong>privacy@tuempresa.com</strong>.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">Eliminación de datos</h2>
      <p className="mb-4">
        Si deseas eliminar tu cuenta o solicitar la eliminación de tus datos
        personales, por favor visita nuestra página de
        <Link href="/data-deletion" className="text-blue-500 underline">
          Eliminación de Datos
        </Link>
        .
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Cambios a esta política
      </h2>
      <p className="mb-4">
        Podemos actualizar esta Política de Privacidad ocasionalmente.
        Publicaremos cualquier cambio en esta página con una fecha de
        actualización revisada.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">Contáctanos</h2>
      <p className="mb-4">
        Si tienes preguntas sobre esta Política de Privacidad, puedes
        contactarnos en:
      </p>
      <address className="mb-4">
        Correo electrónico:{' '}
        <a
          href="mailto:privacy@tuempresa.com"
          className="text-blue-500 underline"
        >
          privacy@tuempresa.com
        </a>
        <br />
        Dirección: Calle Ficticia 123, Ciudad, País
      </address>

      <p className="text-sm text-gray-500">
        Última actualización: 17 de noviembre de 2024
      </p>
    </div>
  );
};

export default PrivacyPolicy;
