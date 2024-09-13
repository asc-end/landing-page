export default function PrivacyPage() {
    return (
        <div className="w-full flex items-center justify-center">

            <div className="flex flex-col items-center justify-center py-24 min-h-screen w-5/6 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6663FF] to-[#7F00FE] bg-clip-text text-transparent">Privacy Policy</h1>
                <p className="text-lg font-medium mb-8">Effective date: September 13th, 2024</p>
                <p className="text-lg mb-8">We value your privacy and are committed to protecting your personal information for our mobile app. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your information.</p>

                <div className="w-full mb-12">
                    <h2 className="text-2xl font-bold mb-4">1. Informations We Collect</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">
                            <strong>Wallet Address:</strong> To enable our app's functionality, we collect your Solana wallet address when you connect your crypto wallet.
                        </li>
                        <li className="mb-4">
                            <strong>Profile Information:</strong> Users may add a pseudonym, profile picture, and description, which can be deleted upon request.
                        </li>
                        <li className="mb-4">
                            <strong>OAuth2 Connections:</strong> You can connect your account to third-party apps (GitHub, Farcaster, Twitter). When you do so:
                            <ul className="list-disc list-inside ml-4">
                                <li className="mb-2"><strong>GitHub:</strong> We fetch your repositories upon challenge creation and may create webhooks to notify you when a commit occurs.</li>
                                <li className="mb-2"><strong>Farcaster:</strong> We fetch relevant data and set up webhooks to notify you about new casts.</li>
                                <li className="mb-2"><strong>Twitter:</strong> We fetch your profile picture but do not create webhooks for this platform.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Messages:</strong> We provide a messaging service and store all message data on our servers, messages aren't encrypted yet. At this time, we do not allow users to delete their message history.
                        </li>
                    </ul>
                </div>

                <div className="w-full mb-12">
                    <h2 className="text-2xl font-bold mb-4">2. Data Sharing</h2>
                    <p className="mb-4">We do not share your personal information with third parties except as necessary to provide the services mentioned above. For example:</p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">GitHub and Farcaster integrations involve interactions with those platforms' APIs.</li>
                        <li className="mb-2">Your profile information may be shared with other users of the app as part of the user experience.</li>
                    </ul>
                </div>

                <div className="w-full mb-12">
                    <h2 className="text-2xl font-bold mb-4">3. Data Retention and Deletion</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">
                            <strong>Profile Information:</strong> You may request the deletion of your profile picture, pseudonym, description, and friend connections at any time.
                        </li>
                        <li className="mb-4">
                            <strong>Messages:</strong> Message history is stored on our servers indefinitely, and we do not currently offer a feature for users to delete their messages.
                        </li>
                        <li className="mb-4">
                            <strong>Third-Party Connections:</strong> You can disconnect from third-party apps (GitHub, Farcaster, Twitter) at any time via your account settings.
                        </li>
                    </ul>
                </div>

                <div className="w-full mb-12">
                    <h2 className="text-2xl font-bold mb-4">4. Security</h2>
                    <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based service is completely secure, and we cannot guarantee absolute security.</p>
                </div>

                <div className="w-full mb-12">
                    <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
                    <p>When you connect third-party apps such as GitHub, Farcaster, or Twitter, those platforms may collect and process your data according to their own privacy policies. We encourage you to review the privacy policies of these services before connecting them to your account.</p>
                </div>

                <div className="w-full mb-12">
                    <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through the app or by other means.</p>
                </div>

                <div className="w-full">
                    <h3 className="text-xl font-bold mb-2">7. Contact Us</h3>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact-ascend@proton.me" className="text-blue-500 hover:text-blue-700">contact-ascend@proton.me</a>.</p>
                </div>
            </div>
        </div>
    )
}