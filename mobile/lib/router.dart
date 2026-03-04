import 'package:go_router/go_router.dart';

import 'screens/splash.dart';
import 'screens/onboarding.dart';
import 'screens/auth.dart';
import 'screens/login.dart';
import 'screens/preferences.dart';
import 'screens/explore.dart';
import 'screens/search.dart';
import 'screens/event_detail.dart';
import 'screens/create_event.dart';
import 'screens/success.dart';
import 'screens/chat.dart';
import 'screens/thread.dart';
import 'screens/profile.dart';
import 'screens/settings.dart';
import 'screens/settings/profile_details.dart';
import 'screens/settings/location.dart';
import 'screens/settings/password.dart';
import 'screens/settings/email.dart';
import 'screens/settings/cuisines.dart';
import 'screens/settings/notifications.dart';
import 'screens/updates.dart';

final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(path: '/', builder: (context, state) => const SplashScreen()),
    GoRoute(
      path: '/onboarding',
      builder: (context, state) =>
          OnboardingScreen(onComplete: () => context.go('/auth')),
    ),
    GoRoute(path: '/auth', builder: (context, state) => const AuthScreen()),
    GoRoute(path: '/login', builder: (context, state) => const LoginScreen()),
    GoRoute(
      path: '/preferences',
      builder: (context, state) => const PreferencesScreen(),
    ),
    GoRoute(
      path: '/explore',
      builder: (context, state) => const ExploreScreen(),
    ),
    GoRoute(path: '/search', builder: (context, state) => const SearchScreen()),
    GoRoute(
      path: '/event/:id',
      builder: (context, state) =>
          EventDetailScreen(id: state.pathParameters['id']!),
    ),
    GoRoute(
      path: '/create',
      builder: (context, state) => const CreateEventScreen(),
    ),
    GoRoute(
      path: '/success',
      builder: (context, state) => const SuccessScreen(),
    ),
    GoRoute(
      path: '/chat/:id',
      builder: (context, state) => ChatScreen(id: state.pathParameters['id']!),
    ),
    GoRoute(
      path: '/thread/:id',
      builder: (context, state) =>
          ThreadScreen(id: state.pathParameters['id']!),
    ),
    GoRoute(
      path: '/profile',
      builder: (context, state) => const ProfileScreen(),
    ),
    GoRoute(
      path: '/settings',
      builder: (context, state) => const SettingsScreen(),
    ),
    GoRoute(
      path: '/settings/profile',
      builder: (context, state) => const ProfileDetailsScreen(),
    ),
    GoRoute(
      path: '/settings/location',
      builder: (context, state) => const LocationSettingsScreen(),
    ),
    GoRoute(
      path: '/settings/password',
      builder: (context, state) => const PasswordSettingsScreen(),
    ),
    GoRoute(
      path: '/settings/email',
      builder: (context, state) => const EmailSettingsScreen(),
    ),
    GoRoute(
      path: '/settings/cuisines',
      builder: (context, state) => const CuisineInterestsScreen(),
    ),
    GoRoute(
      path: '/settings/notifications',
      builder: (context, state) => const NotificationsSettingsScreen(),
    ),
    GoRoute(
      path: '/updates',
      builder: (context, state) => const UpdatesScreen(),
    ),
  ],
);
