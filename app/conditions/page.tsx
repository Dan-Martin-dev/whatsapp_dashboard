// pages/terms.tsx (o app/terms/page.tsx para la nueva estructura)
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">
        Términos y Condiciones de Servicio
      </h1>
      <p className="mb-4">
        Bienvenido a <strong>TuEmpresa</strong>. Al acceder o utilizar nuestros
        servicios, aceptas los términos y condiciones descritos a continuación.
        Si no estás de acuerdo con ellos, no debes utilizar nuestros servicios.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        1. Uso de nuestros servicios
      </h2>
      <p className="mb-4">
        Nuestros servicios están diseñados para ofrecerte la mejor experiencia
        posible. Al utilizarlos, aceptas no realizar actividades ilícitas,
        fraudulentas o que violen los derechos de otros usuarios.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        2. Registro de cuenta
      </h2>
      <p className="mb-4">
        Para acceder a ciertos servicios, es posible que debas crear una cuenta.
        Es tu responsabilidad mantener la confidencialidad de tus credenciales y
        notificar cualquier uso no autorizado de tu cuenta.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">3. Contenido</h2>
      <ul className="mb-4 list-inside list-disc">
        <li>
          Todo el contenido proporcionado en nuestra plataforma es propiedad de{' '}
          <strong>TuEmpresa</strong>, salvo que se indique lo contrario.
        </li>
        <li>
          No puedes copiar, distribuir o modificar ningún contenido sin nuestro
          consentimiento previo por escrito.
        </li>
      </ul>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        4. Terminación del servicio
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de suspender o cancelar tu acceso a nuestros
        servicios si incumples estos términos.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        5. Exención de responsabilidad
      </h2>
      <p className="mb-4">
        Nuestros servicios se proporcionan tal cual. No garantizamos que sean
        libres de errores o interrupciones, ni asumimos responsabilidad por
        cualquier daño derivado de su uso.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        6. Cambios en los términos
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Te notificaremos sobre cambios importantes mediante correo
        electrónico o publicándolos en nuestra plataforma.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">7. Contacto</h2>
      <p className="mb-4">
        Si tienes preguntas sobre estos términos, contáctanos en:
      </p>
      <address className="mb-4">
        Correo electrónico:{' '}
        <a
          href="mailto:soporte@tuempresa.com"
          className="text-blue-500 underline"
        >
          soporte@tuempresa.com
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

export default TermsOfService;
