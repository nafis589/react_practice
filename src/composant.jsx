import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Bell,
  Wallet,
  Plus,
  Search,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Nouvelle commande de Client A", read: false },
    { id: 2, message: "Facture en attente de paiement", read: false },
  ]);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "projects", label: "Projets", icon: FileText },
    { id: "expenses", label: "Dépenses", icon: Wallet },
    { id: "clients", label: "Clients", icon: Users },
    { id: "settings", label: "Paramètres", icon: Settings },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      badge: notifications.filter((n) => !n.read).length,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">FacturesPro</h1>
        </div>
        <nav className="mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-6 py-3 text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2 ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : ""
              }`}
            >
              <tab.icon className="w-5 h-5 mr-3" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="ml-auto bg-red-500 text-white rounded-full px-2 py-1 text-xs animate-pulse">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all hover:scale-105">
                <Plus className="w-5 h-5" />
                Nouveau
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Statistiques */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Projets en cours
                </h3>
                <p className="text-3xl font-bold text-blue-600">12</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Factures impayées
                </h3>
                <p className="text-3xl font-bold text-red-600">5</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Revenus du mois
                </h3>
                <p className="text-3xl font-bold text-green-600">15 000 €</p>
              </div>
            </div>
          )}

          {activeTab === "clients" && (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Liste des clients</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all hover:scale-105">
                    <Plus className="w-5 h-5" />
                    Ajouter un client
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Téléphone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3].map((client) => (
                        <tr
                          key={client}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            Client {client}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            client{client}@example.com
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            +33 6 00 00 00 0{client}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                              Voir détails
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-4">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Bell
                      className={`w-5 h-5 ${
                        notif.read ? "text-gray-400" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={notif.read ? "text-gray-600" : "text-gray-900"}
                    >
                      {notif.message}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
