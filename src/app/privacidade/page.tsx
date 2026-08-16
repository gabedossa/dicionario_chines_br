import type { Metadata } from 'next';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@seudominio.com.br';

export const metadata: Metadata = {
  title: 'Política de Privacidade · 汉字大全',
  description: 'Política de privacidade do 汉字大全 — Compêndio de Hanzi: cookies, Google AdSense, Google Fonts e contato.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 text-[var(--bone)]">
      <a href="/" className="text-sm text-[var(--seal-bright)] underline">
        ← Voltar
      </a>
      <h1 className="mt-6 text-3xl font-bold">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-[var(--bone-dim)]">Última atualização: 4 de julho de 2026</p>

      <section className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--bone-dim)]">
        <p>
          Esta política descreve como o{' '}
          <strong className="text-[var(--bone)]">汉字大全 — Compêndio de Hanzi</strong> trata os dados de
          quem visita o site.
        </p>

        <h2 className="text-lg font-semibold text-[var(--bone)]">Cookies e publicidade (Google AdSense)</h2>
        <p>
          Utilizamos o Google AdSense para exibir anúncios. O AdSense pode usar cookies e identificadores
          semelhantes para personalizar anúncios com base na sua atividade neste e em outros sites. Esses
          anúncios só são carregados depois que você aceita o uso de cookies no aviso exibido na primeira
          visita ao site.
        </p>
        <p>
          Você pode saber mais sobre como o Google usa dados de sites parceiros em{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            className="text-[var(--seal-bright)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>{' '}
          e gerenciar suas preferências de anúncios em{' '}
          <a
            href="https://adssettings.google.com/"
            className="text-[var(--seal-bright)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            adssettings.google.com
          </a>
          .
        </p>

        <h2 className="text-lg font-semibold text-[var(--bone)]">Consentimento</h2>
        <p>
          Ao clicar em &quot;Aceitar&quot; no aviso de cookies, você autoriza o carregamento dos scripts de
          anúncio. Se clicar em &quot;Recusar&quot;, nenhum anúncio nem cookie de publicidade é carregado.
          Você pode alterar sua decisão a qualquer momento apagando os dados de navegação (cookies e
          armazenamento local) deste site no seu navegador.
        </p>

        <h2 className="text-lg font-semibold text-[var(--bone)]">Fontes do Google</h2>
        <p>
          Este site carrega fontes tipográficas hospedadas pelo Google Fonts. Ao carregar essas fontes, seu
          navegador se conecta aos servidores do Google, que podem registrar seu endereço IP.
        </p>

        <h2 className="text-lg font-semibold text-[var(--bone)]">Seus direitos</h2>
        <p>
          Você pode solicitar informações sobre os dados tratados ou pedir sua remoção entrando em contato
          pelo e-mail abaixo.
        </p>

        <h2 className="text-lg font-semibold text-[var(--bone)]">Contato</h2>
        <p>{CONTACT_EMAIL}</p>

        <h2 className="text-lg font-semibold text-[var(--bone)]">Alterações</h2>
        <p>
          Esta política pode ser atualizada periodicamente; a data no topo desta página indica a última
          revisão.
        </p>
      </section>
    </main>
  );
}
