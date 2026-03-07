# Mobile Agent Instructions

## Package Manager

Use **flutter**: `flutter pub get`, `flutter pub upgrade`, `flutter pub run build_runner build --delete-conflicting-outputs`

## Required Skills

The following skills MUST be activated and used for all work in the `/mobile` directory:

- `flutter-expert`: For all UI, navigation, and state management logic.
- `mobile-developer`: For platform-specific configurations and general mobile best practices.
- `mobile-design`: To ensure premium UI/UX, responsiveness, and consistent design language.
- `native-data-fetching`: For Dio services, WebSocket integration, and error handling.
- `mobile-security-coder`: For handling secure storage and sensitive authentication data.

## Project Architecture & Conventions

- **State Management**: Use **Provider** (defined in `lib/main.dart` and `lib/services/`).
- **Services**: All business logic and data fetching must live in `lib/services/`. Classes should be reusable and namespaced where appropriate.
- **Navigation**: Use **GoRouter** (defined in `lib/router.dart`).
- **UI Styling**: Follow patterns in `lib/theme/` and `lib/screens/`. Prioritize visual excellence, smooth animations, and premium aesthetics.
- **Local Storage**: Use `LocalStorage` (`shared_preferences`) for general settings and `SecureStorage` (`flutter_secure_storage`) for sensitive data like tokens.
- **Networking**: Use `ApiService` (`dio`) for REST and `SocketService` (`web_socket_channel`) for real-time features.

## File-Scoped Commands

| Task | Command |
|------|---------|
| Analyze | `flutter analyze lib/path/to/file.dart` |
| Test | `flutter test test/path/to/file_test.dart` |
| Build Runner | `flutter pub run build_runner build --delete-conflicting-outputs` |
