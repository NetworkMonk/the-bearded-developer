import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";
import CodeBlock from "@/components/resources/example-components/CodeBlock";

export const metadata = {
  title: article.metadata.title,
  description: article.metadata.description,
};

export default function ArticlePage() {
  return (
    <ArticleContainer article={article}>
      <section className="md:p-12 relative grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className={`text-4xl md:text-5xl font-bold ${lexend.className}`}>
            Configuring VS Code for Magento 2 XML Autocompletion: A
            Developer&apos;s Guide
          </h2>
          <p className="mt-10">
            Building a Magento 2 app is no small feat, and editing XML files
            like &quot;module.xml&quot; without autocompletion can feel like
            coding with one hand tied behind your back. Proper IDE setup can
            save you from typos and configuration errors, making development
            faster and less stressful. This tutorial shows you how to configure
            Visual Studio Code (VS Code) for autocompletion and validation of
            Magento 2 XML files, focusing on a foolproof method using
            Magento&apos;s built-in URN catalog generation. Whether you&apos;re
            crafting a custom module or tweaking an existing one, The Bearded
            Developer has your back with this straightforward guide—no wizardry
            required.
          </p>
          <p className="mt-6">
            Why is this worth your time? Magento 2 relies on XML files like
            &quot;module.xml&quot; to define modules, layouts, and
            configurations. Without autocompletion, you&apos;re prone to errors
            that can break your store. By setting up VS Code with Magento&apos;s
            schema catalog, you&apos;ll get real-time suggestions and
            validation, boosting your productivity. Let&apos;s walk through the
            steps to make VS Code your Magento 2 ally, with a key focus on
            generating and linking the URN catalog.
          </p>
          <div>
            <Image
              src="/img/articles/vscode-xml-autocomplete-for-magento/rubaitul-azad-zbILyELGOtk-unsplash.jpg"
              alt="VS Code XML Autocompletion for Magento 2"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Your Magento 2 XML Setup Checklist
          </h3>
          <p className="mt-4">
            Follow these steps to configure VS Code for Magento 2 XML
            autocompletion:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>Understand module.xml:</strong> This file declares your
              module to Magento 2, using a &lt;config&gt; root element and a
              &lt;module&gt; tag for name and version. Ensure it includes the
              schema reference:{" "}
              <code>
                xsi:noNamespaceSchemaLocation=&quot;urn:magento:framework:Module/etc/module.xsd&quot;
              </code>
              . This URN tells Magento and your IDE where to find the schema for
              validation.
            </li>
            <li>
              <strong>Install VS Code Extensions:</strong> Add the &quot;Red Hat
              XML&quot; extension from the VS Code Marketplace. It supports XML
              schema validation and autocompletion, essential for Magento 2 XML
              files. Optionally, install &quot;Magento 2 Snippets&quot; for
              extra Magento-specific shortcuts.
            </li>
            <li>
              <strong>Include Magento 2 Source:</strong> Ensure your project
              includes the full Magento 2 source code, including schema files
              (e.g.,
              &quot;vendor/magento/framework/Module/etc/module.xsd&quot;). This
              allows VS Code to reference Magento&apos;s schemas locally.
            </li>
            <li>
              <strong>Generate URN Catalog:</strong> Run the following command
              in your Magento 2 root directory to generate a catalog file for VS
              Code:
              <CodeBlock
                language="bash"
                code="bin/magento dev:urn-catalog:generate ./.vscode/catalog.xml"
              />
              This creates a &quot;catalog.xml&quot; file in the
              &quot;.vscode&quot; folder, mapping Magento&apos;s URNs (like
              &quot;urn:magento:framework:Module/etc/module.xsd&quot;) to local
              schema files.
            </li>
            <li>
              <strong>Update VS Code Settings:</strong> Add the catalog to your
              workspace settings in <code>.vscode/settings.json</code>:
              <CodeBlock
                language="json"
                code={`{
  "xml.catalogs": [
    "./.vscode/catalog.xml"
  ]
}`}
              />
              This tells VS Code to use the generated catalog for XML
              autocompletion and validation.
            </li>
            <li>
              <strong>Restart and Test:</strong> Restart VS Code after updating
              settings. Open a &quot;module.xml&quot; file and type a tag like
              &lt;module&gt;—you should see suggestions for attributes like
              &quot;name&quot; or &quot;setup_version&quot;. If errors appear,
              ensure the catalog file was generated correctly.
            </li>
          </ul>
          <p className="mt-6">
            These steps, especially generating the URN catalog and linking it in
            VS Code, ensure seamless autocompletion for Magento 2 XML files. The
            &quot;bin/magento dev:urn-catalog:generate&quot; command is the key,
            as it automates URN-to-path mapping, saving you from manual
            configuration.
          </p>
          <p className="mt-6">
            Watch out for common issues. If autocompletion doesn&apos;t work,
            verify that the &quot;catalog.xml&quot; file exists in
            &quot;.vscode&quot; and contains valid URN mappings. Ensure your
            Magento 2 installation is complete, as missing schema files will
            break validation. If the command fails, check that you have proper
            permissions in the project directory. Security tip: Only install
            trusted VS Code extensions to avoid risks. Need help? Our team at
            The Bearded Developer can configure your Magento 2 environment, from
            VS Code setup to module development, for a frustration-free
            workflow.
          </p>
          <p className="mt-6">
            Configuring VS Code for Magento 2 XML autocompletion is a
            game-changer, turning tedious XML editing into a smooth, error-free
            process. Follow this checklist, test thoroughly, and enjoy coding
            with confidence. Or, if you&apos;d rather skip the setup, let The
            Bearded Developer handle it—we&apos;ll make your Magento 2
            development as tidy as a freshly trimmed beard.
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Pro Tips for Magento 2 Development
          </h3>
          <ul className="mt-4 list-decimal list-inside space-y-2 text-sm">
            <li>
              Run &quot;bin/magento setup:upgrade&quot; after modifying XML to
              ensure changes apply.
            </li>
            <li>
              Add &quot;.vscode/catalog.xml&quot; to .gitignore to avoid
              versioning generated files.
            </li>
            <li>
              Use VS Code&apos;s XML validation to catch schema errors early.
            </li>
            <li>Check Magento DevDocs for the latest XML schema references.</li>
            <li>Back up your project before running Magento commands.</li>
          </ul>
          <p className="mt-4 text-sm">
            Need help?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            for a tailored Magento 2 setup.
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}
